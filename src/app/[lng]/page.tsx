import { JSX } from 'react/jsx-runtime';
import { LngParamProps, fallbackLng, languages } from '../i18n/settings';
import React from 'react';

export default async function Page({
  params,
}: LngParamProps): Promise<JSX.Element> {
  let { lng } = params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // const { t } = await useTranslation(lng, TranslationFilesType.login);
  //consulta: Como funcionan las carpetas de traduccion y eso se llama [Ing] ?
  return <div>HELLO</div>;
}
