import Image from 'next/image';

import { LngParamProps, fallbackLng, languages } from '@/app/i18n';
import { SignUpForm } from '@/components';
import { freedomLogo } from '@/constants';

export default async function Page({
  params,
}: LngParamProps): Promise<JSX.Element> {
  let { lng } = params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // const { t } = await useTranslation(lng, TranslationFilesType.login);

  return (
    <div className='flex justify-center md:flex md:justify-center'>
      <div className='p-2 md:flex md:flex-col md:justify-center md:items-center justify-center items-center'>
        <Image
          className='min-w-62 min-h-72 md:min-w-62 md:min-h-72'
          src={freedomLogo}
          alt='freedom-logo'
          width={500}
          height={215}
        />
        <SignUpForm lng={lng} />
      </div>
    </div>
  );
}
