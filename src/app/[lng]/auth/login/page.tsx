import Image from 'next/image';

import { LngParamProps, fallbackLng, languages } from '@/app/i18n';
import { freedomLogo } from '@/constants';
import { LoginForm } from '@/components';

export default async function Page({
  params,
}: LngParamProps): Promise<JSX.Element> {
  let { lng } = params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // const { t } = await useTranslation(lng, TranslationFilesType.login);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='md:flex md:flex-col h-3/4 md:h-3/4'>
        <Image
          className='w-42 h-76 md:w-42 md:h-80'
          src={freedomLogo}
          alt='freedom-logo'
          width={500}
          height={315}
        />
        <LoginForm lng={lng} />
      </div>
    </div>
  );
}
