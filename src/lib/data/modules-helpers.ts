/**
 * Helper functions for working with multilingual module data
 */

import type { Chapter, ModuleData } from './modules-data'
import type { LocalizedString } from './modules-translations'

/**
 * Supported locales
 */
export type Locale = 'en' | 'fr' | 'es' | 'ro'

/**
 * Get a localized string value for the given locale
 */
export function getLocalizedString(
  value: string | LocalizedString,
  locale: Locale = 'en'
): string {
  if (typeof value === 'string') {
    return value
  }
  return value[locale] || value.en
}

/**
 * Get localized chapter data
 */
export function getLocalizedChapter(
  chapter: Chapter,
  locale: Locale = 'en'
): Omit<Chapter, 'title' | 'description'> & { title: string; description: string } {
  return {
    ...chapter,
    title: getLocalizedString(chapter.title, locale),
    description: getLocalizedString(chapter.description, locale)
  }
}

/**
 * Get localized module data
 */
export function getLocalizedModule(
  module: ModuleData,
  locale: Locale = 'en'
): Omit<ModuleData, 'title' | 'description'> & { title: string; description: string } {
  return {
    ...module,
    title: getLocalizedString(module.title, locale),
    description: getLocalizedString(module.description, locale)
  }
}

/**
 * Get localized chapters from JSON string
 */
export function getLocalizedChapters(
  chaptersJson: string,
  locale: Locale = 'en'
): Array<Omit<Chapter, 'title' | 'description'> & { title: string; description: string }> {
  const chapters: Chapter[] = JSON.parse(chaptersJson)
  return chapters.map(chapter => getLocalizedChapter(chapter, locale))
}

/**
 * Get all modules with localized strings for a specific locale
 */
export function getLocalizedModules(
  modules: ModuleData[],
  locale: Locale = 'en'
): Array<Omit<ModuleData, 'title' | 'description'> & { title: string; description: string }> {
  return modules.map(module => getLocalizedModule(module, locale))
}
