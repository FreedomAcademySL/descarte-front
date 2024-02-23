import { TFunction } from 'i18next';

export enum AvailableLanguages {
  en = 'en',
  es = 'es',
}
export const fallbackLng = AvailableLanguages.en;
export const languages = Object.values(AvailableLanguages);

export interface LngProps {
  lng: AvailableLanguages;
}
export interface LngParamProps {
  params: LngProps;
}

export interface I18NextProps {
  t: TFunction<string, string>;
}

export const defaultNS = 'translation';
export const cookieName = 'i18next';

export interface GetOptionsStore {
  supportedLngs: string[];
  fallbackLng: string;
  lng: string;
  fallbackNS: string;
  defaultNS: string;
  ns: string;
}

export function getOptions(lng = fallbackLng, ns = defaultNS): GetOptionsStore {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
