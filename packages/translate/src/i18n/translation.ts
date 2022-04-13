import { htmlLangAttributeDetector } from 'typesafe-i18n/detectors'

import type { TranslationFunctions } from './i18n-types.js'
import { baseLocale, detectLocale, i18nObject } from './i18n-util.js'

export const getTranslation = (): TranslationFunctions => {
  return typeof window !== 'undefined'
    ? i18nObject(detectLocale(htmlLangAttributeDetector))
    : i18nObject('en')
}

export const locale =
  typeof window !== 'undefined' ? detectLocale(htmlLangAttributeDetector) : baseLocale
