'use client';

import { useEffect, useState } from 'react';

import { LngProps } from '@/app/i18n';
import { DefaultLayout, Loader } from '@/components';

export default function Layout({
  children,
}: Readonly<{
  children: JSX.Element;
  params: LngProps;
}>): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className='dark:bg-boxdark-2 dark:text-bodydark text-boxdark-2 bg-whiten'>
      <DefaultLayout>{children}</DefaultLayout>
    </div>
  );
}
