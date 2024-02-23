import { TFunction, createInstance, i18n } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

import { AvailableLanguages, getOptions } from './settings';

const initI18next = async (
  lng: AvailableLanguages,
  ns?: string,
): Promise<i18n> => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export async function useTranslation(
  lng: AvailableLanguages,
  ns?: string,
  options?: { keyPrefix: string },
): Promise<{
  t: TFunction<string, string>;
  i18n: i18n;
}> {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options?.keyPrefix,
    ),
    i18n: i18nextInstance,
  };
}

export async function getTranslationObject<T>(
  lng: AvailableLanguages,
  ns?: string,
): Promise<T> {
  const i18nInstance = await initI18next(lng, ns);
  return i18nInstance.getDataByLanguage(lng) as T;
}
