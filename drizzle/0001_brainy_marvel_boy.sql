CREATE TABLE `certificate` (
	`id` text PRIMARY KEY NOT NULL,
	`organization_id` text NOT NULL,
	`ai_system_id` text,
	`type` text NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`status` text DEFAULT 'draft' NOT NULL,
	`certificate_number` text,
	`issued_at` integer,
	`expires_at` integer,
	`revoked_at` integer,
	`metadata` text,
	`file_path` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`created_by_id` text,
	FOREIGN KEY (`organization_id`) REFERENCES `organization`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`ai_system_id`) REFERENCES `ai_system`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`created_by_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `gap_analysis_result` (
	`id` text PRIMARY KEY NOT NULL,
	`organization_id` text NOT NULL,
	`ai_system_id` text,
	`assessment_id` text,
	`category` text NOT NULL,
	`requirement` text NOT NULL,
	`article` text,
	`status` text DEFAULT 'gap' NOT NULL,
	`current_state` text,
	`target_state` text,
	`gap` text,
	`priority` text DEFAULT 'medium' NOT NULL,
	`remediation` text,
	`due_date` integer,
	`completed_at` integer,
	`notes` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`organization_id`) REFERENCES `organization`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`ai_system_id`) REFERENCES `ai_system`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`assessment_id`) REFERENCES `assessment`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `glossary_bookmark` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`term_id` text NOT NULL,
	`notes` text,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`term_id`) REFERENCES `glossary_term`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `glossary_term` (
	`id` text PRIMARY KEY NOT NULL,
	`term` text NOT NULL,
	`definition` text NOT NULL,
	`article` text NOT NULL,
	`category` text NOT NULL,
	`related` text,
	`examples` text,
	`key_points` text,
	`is_official` integer DEFAULT true NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `learning_module` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`category` text NOT NULL,
	`difficulty` text DEFAULT 'beginner' NOT NULL,
	`duration` integer DEFAULT 30 NOT NULL,
	`chapters` text NOT NULL,
	`order` integer DEFAULT 0 NOT NULL,
	`is_published` integer DEFAULT true NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `learning_module_slug_unique` ON `learning_module` (`slug`);--> statement-breakpoint
CREATE TABLE `module_resource` (
	`id` text PRIMARY KEY NOT NULL,
	`module_id` text NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`type` text NOT NULL,
	`url` text NOT NULL,
	`size` text,
	`order` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`module_id`) REFERENCES `learning_module`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `quiz_attempt` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`module_id` text NOT NULL,
	`chapter_index` integer NOT NULL,
	`score` integer NOT NULL,
	`total_questions` integer NOT NULL,
	`correct_answers` integer NOT NULL,
	`passed` integer NOT NULL,
	`answers` text NOT NULL,
	`completed_at` integer NOT NULL,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`module_id`) REFERENCES `learning_module`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `report` (
	`id` text PRIMARY KEY NOT NULL,
	`organization_id` text NOT NULL,
	`type` text NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`status` text DEFAULT 'draft' NOT NULL,
	`parameters` text,
	`data` text,
	`file_path` text,
	`generated_at` integer,
	`scheduled_for` integer,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`created_by_id` text,
	FOREIGN KEY (`organization_id`) REFERENCES `organization`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`created_by_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `requirements_status` (
	`id` text PRIMARY KEY NOT NULL,
	`organization_id` text NOT NULL,
	`ai_system_id` text,
	`requirement_id` text NOT NULL,
	`article` text NOT NULL,
	`category` text NOT NULL,
	`control_id` text,
	`status` text DEFAULT 'not_started' NOT NULL,
	`evidence` text,
	`owner` text,
	`due_date` integer,
	`completed_at` integer,
	`verified_at` integer,
	`verified_by` text,
	`notes` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`organization_id`) REFERENCES `organization`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`ai_system_id`) REFERENCES `ai_system`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`verified_by`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user_module_progress` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`module_id` text NOT NULL,
	`status` text DEFAULT 'not_started' NOT NULL,
	`progress` integer DEFAULT 0 NOT NULL,
	`current_chapter` integer DEFAULT 0 NOT NULL,
	`completed_chapters` text,
	`started_at` integer,
	`completed_at` integer,
	`last_accessed_at` integer,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`module_id`) REFERENCES `learning_module`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
ALTER TABLE `ai_system` ADD `operator_role` text;--> statement-breakpoint
ALTER TABLE `ai_system` ADD `additional_roles` text;--> statement-breakpoint
ALTER TABLE `ai_system` ADD `roles_determined_at` integer;