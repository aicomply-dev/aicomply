-- 00001_initial_schema.sql
-- Initial schema for AI Act Compliance Platform
-- Includes tables, RLS policies, and auth trigger

-- ============================================================================
-- TABLES
-- ============================================================================

CREATE TABLE IF NOT EXISTS organization (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS profile (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  role text,
  organization_id uuid REFERENCES organization(id),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS ai_system (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organization(id),
  name text NOT NULL,
  description text,
  risk_level text,
  operator_role text,
  category text,
  status text NOT NULL DEFAULT 'active',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS assessment (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organization(id),
  ai_system_id uuid REFERENCES ai_system(id),
  type text NOT NULL,
  status text NOT NULL DEFAULT 'in_progress',
  score integer,
  completed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS assessment_answer (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  assessment_id uuid NOT NULL REFERENCES assessment(id) ON DELETE CASCADE,
  question_id text NOT NULL,
  answer jsonb,
  score integer
);

CREATE TABLE IF NOT EXISTS compliance_requirement (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ai_system_id uuid NOT NULL REFERENCES ai_system(id),
  organization_id uuid NOT NULL REFERENCES organization(id),
  standard_id text NOT NULL,
  control_id text NOT NULL,
  status text NOT NULL DEFAULT 'not_started',
  evidence text,
  verified_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS gap_analysis_result (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ai_system_id uuid NOT NULL REFERENCES ai_system(id),
  organization_id uuid NOT NULL REFERENCES organization(id),
  requirement_id text NOT NULL,
  gap_description text,
  severity text,
  remediation_plan text,
  status text NOT NULL DEFAULT 'identified',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS policy (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organization(id),
  title text NOT NULL,
  content text,
  status text NOT NULL DEFAULT 'draft',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- ============================================================================
-- AUTH TRIGGER: auto-create organization + profile on signup
-- ============================================================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
DECLARE
  new_org_id uuid;
  user_name text;
  org_slug text;
BEGIN
  -- Extract display name from metadata, fallback to email
  user_name := COALESCE(
    NEW.raw_user_meta_data ->> 'full_name',
    NEW.raw_user_meta_data ->> 'name',
    split_part(NEW.email, '@', 1)
  );

  -- Generate a unique slug from email domain + random suffix
  org_slug := replace(split_part(NEW.email, '@', 2), '.', '-')
    || '-' || substr(gen_random_uuid()::text, 1, 8);

  -- Create the organization
  INSERT INTO public.organization (name, slug)
  VALUES (user_name || '''s Organization', org_slug)
  RETURNING id INTO new_org_id;

  -- Create the profile linked to auth.users and the new org
  INSERT INTO public.profile (id, full_name, role, organization_id)
  VALUES (NEW.id, user_name, 'admin', new_org_id);

  RETURN NEW;
END;
$$;

-- Drop existing trigger if any, then create
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ============================================================================
-- ENABLE ROW LEVEL SECURITY
-- ============================================================================

ALTER TABLE organization ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_system ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessment ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessment_answer ENABLE ROW LEVEL SECURITY;
ALTER TABLE compliance_requirement ENABLE ROW LEVEL SECURITY;
ALTER TABLE gap_analysis_result ENABLE ROW LEVEL SECURITY;
ALTER TABLE policy ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- HELPER: get the current user's organization_id
-- ============================================================================

CREATE OR REPLACE FUNCTION public.get_user_org_id()
RETURNS uuid
LANGUAGE sql
STABLE
SECURITY DEFINER SET search_path = ''
AS $$
  SELECT organization_id
  FROM public.profile
  WHERE id = auth.uid()
$$;

-- ============================================================================
-- RLS POLICIES
-- ============================================================================

-- organization: users can only see their own org
CREATE POLICY "Users can view own organization"
  ON organization FOR SELECT
  USING (id = public.get_user_org_id());

CREATE POLICY "Users can update own organization"
  ON organization FOR UPDATE
  USING (id = public.get_user_org_id());

-- profile: users can see profiles in their org
CREATE POLICY "Users can view profiles in own org"
  ON profile FOR SELECT
  USING (organization_id = public.get_user_org_id());

CREATE POLICY "Users can update own profile"
  ON profile FOR UPDATE
  USING (id = auth.uid());

-- ai_system: org-scoped
CREATE POLICY "Users can view org ai_systems"
  ON ai_system FOR SELECT
  USING (organization_id = public.get_user_org_id());

CREATE POLICY "Users can insert org ai_systems"
  ON ai_system FOR INSERT
  WITH CHECK (organization_id = public.get_user_org_id());

CREATE POLICY "Users can update org ai_systems"
  ON ai_system FOR UPDATE
  USING (organization_id = public.get_user_org_id());

CREATE POLICY "Users can delete org ai_systems"
  ON ai_system FOR DELETE
  USING (organization_id = public.get_user_org_id());

-- assessment: org-scoped
CREATE POLICY "Users can view org assessments"
  ON assessment FOR SELECT
  USING (organization_id = public.get_user_org_id());

CREATE POLICY "Users can insert org assessments"
  ON assessment FOR INSERT
  WITH CHECK (organization_id = public.get_user_org_id());

CREATE POLICY "Users can update org assessments"
  ON assessment FOR UPDATE
  USING (organization_id = public.get_user_org_id());

CREATE POLICY "Users can delete org assessments"
  ON assessment FOR DELETE
  USING (organization_id = public.get_user_org_id());

-- assessment_answer: scoped via assessment's org
CREATE POLICY "Users can view org assessment_answers"
  ON assessment_answer FOR SELECT
  USING (
    assessment_id IN (
      SELECT id FROM assessment WHERE organization_id = public.get_user_org_id()
    )
  );

CREATE POLICY "Users can insert org assessment_answers"
  ON assessment_answer FOR INSERT
  WITH CHECK (
    assessment_id IN (
      SELECT id FROM assessment WHERE organization_id = public.get_user_org_id()
    )
  );

CREATE POLICY "Users can update org assessment_answers"
  ON assessment_answer FOR UPDATE
  USING (
    assessment_id IN (
      SELECT id FROM assessment WHERE organization_id = public.get_user_org_id()
    )
  );

CREATE POLICY "Users can delete org assessment_answers"
  ON assessment_answer FOR DELETE
  USING (
    assessment_id IN (
      SELECT id FROM assessment WHERE organization_id = public.get_user_org_id()
    )
  );

-- compliance_requirement: org-scoped
CREATE POLICY "Users can view org compliance_requirements"
  ON compliance_requirement FOR SELECT
  USING (organization_id = public.get_user_org_id());

CREATE POLICY "Users can insert org compliance_requirements"
  ON compliance_requirement FOR INSERT
  WITH CHECK (organization_id = public.get_user_org_id());

CREATE POLICY "Users can update org compliance_requirements"
  ON compliance_requirement FOR UPDATE
  USING (organization_id = public.get_user_org_id());

CREATE POLICY "Users can delete org compliance_requirements"
  ON compliance_requirement FOR DELETE
  USING (organization_id = public.get_user_org_id());

-- gap_analysis_result: org-scoped
CREATE POLICY "Users can view org gap_analysis_results"
  ON gap_analysis_result FOR SELECT
  USING (organization_id = public.get_user_org_id());

CREATE POLICY "Users can insert org gap_analysis_results"
  ON gap_analysis_result FOR INSERT
  WITH CHECK (organization_id = public.get_user_org_id());

CREATE POLICY "Users can update org gap_analysis_results"
  ON gap_analysis_result FOR UPDATE
  USING (organization_id = public.get_user_org_id());

CREATE POLICY "Users can delete org gap_analysis_results"
  ON gap_analysis_result FOR DELETE
  USING (organization_id = public.get_user_org_id());

-- policy: org-scoped
CREATE POLICY "Users can view org policies"
  ON policy FOR SELECT
  USING (organization_id = public.get_user_org_id());

CREATE POLICY "Users can insert org policies"
  ON policy FOR INSERT
  WITH CHECK (organization_id = public.get_user_org_id());

CREATE POLICY "Users can update org policies"
  ON policy FOR UPDATE
  USING (organization_id = public.get_user_org_id());

CREATE POLICY "Users can delete org policies"
  ON policy FOR DELETE
  USING (organization_id = public.get_user_org_id());
