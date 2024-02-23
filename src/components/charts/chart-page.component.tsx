'use client';
import React from 'react';
import { Breadcrumb } from '../breadcrumbs';

import { ChartOne, ChartThree, ChartTwo } from '@/components';

export const Chart: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName='Chart' />

      <div className='grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5'>
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};
