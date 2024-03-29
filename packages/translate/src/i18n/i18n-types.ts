// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type {
  BaseTranslation as BaseTranslationType,
  LocalizedString,
} from 'typesafe-i18n';

export type BaseTranslation = BaseTranslationType;
export type BaseLocale = 'en';

export type Locales = 'en' | 'fr';

export type Translation = RootTranslation;

export type Translations = RootTranslation;

type RootTranslation = {
  common: {};
  home: {};
  modals: {};
  words: {
    /**
     * saturation
     */
    saturation: string;
    /**
     * joie
     */
    happiness: string;
    /**
     * fatigue
     */
    tiredness: string;
    /**
     * santé
     */
    health: string;
  };
};

export type TranslationFunctions = {
  common: {};
  home: {};
  modals: {};
  words: {
    /**
     * saturation
     */
    saturation: () => LocalizedString;
    /**
     * joie
     */
    happiness: () => LocalizedString;
    /**
     * fatigue
     */
    tiredness: () => LocalizedString;
    /**
     * santé
     */
    health: () => LocalizedString;
  };
};

export type Formatters = {};
