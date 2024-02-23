import { SvgProps } from '@/types';

export const ArrowBackIosIcon = ({
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
        d='M9.80833 2.14163L8.33333 0.666626L0 8.99996L8.33333 17.3333L9.80833 15.8583L2.95 8.99996L9.80833 2.14163Z'
        fill={color}
      />
    </svg>
  );
};
