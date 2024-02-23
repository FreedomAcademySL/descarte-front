import { SvgProps } from '@/types';

export const ArrowForwardIosIcon = ({
  size = '24px',
  color = 'currentColor',
}: SvgProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 10 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.19165 15.8583L1.66665 17.3333L9.99998 8.99996L1.66665 0.666626L0.19165 2.14163L7.04998 8.99996L0.19165 15.8583Z'
        fill={color}
      />
    </svg>
  );
};
