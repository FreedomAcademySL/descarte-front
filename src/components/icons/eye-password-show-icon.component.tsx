import { SvgProps } from '@/types';

export const EyePasswordShow = ({ size = '24px' }: SvgProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='cursor-pointer'
    >
      <path
        d='M1 12C1 12 5 4 12 4C19 4 23 12 23 12'
        stroke='#000000'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1 12C1 12 5 20 12 20C19 20 23 12 23 12'
        stroke='#000000'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        cx='12'
        cy='12'
        r='3'
        stroke='#000000'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
