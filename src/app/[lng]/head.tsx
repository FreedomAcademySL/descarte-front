import { LngParamProps, fallbackLng, languages } from '../i18n/settings';
import { useTranslation } from '../i18n/utils';

export default async function Head({
  params,
}: LngParamProps): Promise<JSX.Element> {
  if (languages.indexOf(params.lng) < 0) params.lng = fallbackLng;
  const { t } = await useTranslation(params.lng);

  return (
    <>
      <title>{t('meta-title')}</title>
      <meta name='description' content={t('meta-description')} />
    </>
  );
}
