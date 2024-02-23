import { SvgProps } from '@/types';

export const ArrowDownwardIcon = ({
  size = '24px',
  color = 'currentColor',
  className,
}: SvgProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 16 16'
      className={className}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.00022 1V12.17L2.12021 7.29C1.73021 6.9 1.09021 6.9 0.700215 7.29C0.310215 7.68 0.310215 8.31 0.700215 8.7L7.29022 15.29C7.68021 15.68 8.31021 15.68 8.70021 15.29L15.2902 8.7C15.6802 8.31 15.6802 7.68 15.2902 7.29C14.9002 6.9 14.2702 6.9 13.8802 7.29L9.00021 12.17V1C9.00021 0.45 8.55021 0 8.00022 0C7.45021 0 7.00022 0.45 7.00022 1Z'
        fill={color}
      />
    </svg>
  );
};
