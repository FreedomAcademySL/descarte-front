import React, { FC } from 'react';

interface CardDataStatsProps {
  svg?: JSX.Element;
  children?: JSX.Element;
}

export const CardDataStats: FC<CardDataStatsProps> = ({ svg, children }) => {
  return (
    <div className='rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark'>
      <div className='flex'>
        <div className='flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4'>
          {svg}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
