import React, { FC } from 'react';

interface CardProps {
  svg?: JSX.Element;
  children?: JSX.Element;
}

export const Card: FC<CardProps> = ({ svg, children }) => {
  return (
    <div className='rounded-xl border-2 border-solid border-dark-gray px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark relative box-border '>
      {svg && (
        <div className='flex'>
          <div className='flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4'>
            {svg}
          </div>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};
