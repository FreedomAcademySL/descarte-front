import { LngParamProps, fallbackLng, languages } from '@/app/i18n';
import { DashboardEcommerce } from '@/components';

export default async function Page({
  params,
}: LngParamProps): Promise<JSX.Element> {
  let { lng } = params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // const { t } = await useTranslation(lng, TranslationFilesType.login);

  // return <DashboardEcommerce></DashboardEcommerce>;
  return <div></div>;
}
