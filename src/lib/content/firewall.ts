import {readFile} from 'fs/promises';
import {join} from 'path';
import {locales, isValidLocale, defaultLocale, type Locale} from '@/i18n/config';

export interface FirewallConfigMetadata {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  lastUpdated: string;
  supportedLocales: Locale[];
}

/**
 * Get metadata for firewall configuration
 */
export async function getFirewallConfigMetadata(): Promise<FirewallConfigMetadata> {
  return {
    title: {
      en: 'Safe Firewall Configuration for Cursor & AI Tools',
      de: 'Sichere Firewall-Konfiguration für Cursor & AI-Tools',
      fr: 'Configuration de pare-feu sécurisée pour Cursor et les outils IA',
      es: 'Configuración segura del firewall para Cursor y herramientas de IA',
      ro: 'Configurare sigură a firewall-ului pentru Cursor și instrumente IA',
    },
    description: {
      en: 'Verified working firewall configuration tested with Cursor IDE, GitHub, Windsurf, and more',
      de: 'Getestete und funktionierende Firewall-Konfiguration mit Cursor IDE, GitHub, Windsurf und mehr',
      fr: 'Configuration de pare-feu testée et fonctionnelle avec Cursor IDE, GitHub, Windsurf et plus',
      es: 'Configuración de firewall verificada y funcional probada con Cursor IDE, GitHub, Windsurf y más',
      ro: 'Configurare de firewall verificată și funcțională testată cu Cursor IDE, GitHub, Windsurf și altele',
    },
    lastUpdated: '2025-12-13',
    supportedLocales: [...locales],
  };
}

/**
 * Get firewall configuration content for a specific locale
 * Falls back to English if locale file doesn't exist
 */
export async function getFirewallConfig(locale: string = defaultLocale): Promise<string> {
  const targetLocale: Locale = isValidLocale(locale) ? locale : defaultLocale;
  
  const filePath = join(
    process.cwd(),
    'content',
    'firewall-config',
    `${targetLocale}.md`
  );
  
  try {
    return await readFile(filePath, 'utf-8');
  } catch (error) {
    // Fallback to English if file doesn't exist
    if (targetLocale !== defaultLocale) {
      return getFirewallConfig(defaultLocale);
    }
    throw new Error(`Firewall config file not found for locale: ${targetLocale}`);
  }
}

/**
 * Get available locales for firewall config
 */
export async function getAvailableLocales(): Promise<Locale[]> {
  const metadata = await getFirewallConfigMetadata();
  return metadata.supportedLocales;
}
