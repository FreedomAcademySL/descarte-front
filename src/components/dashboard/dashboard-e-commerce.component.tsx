'use client';
import React from 'react';

import { ChartOne, ChartThree, ChartTwo, ChatCard } from '@/components';

export const DashboardEcommerce: React.FC = () => {
  return (
    <>
      <div className='mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5'>
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <ChatCard />
      </div>
    </>
  );
};
