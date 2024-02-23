import { SvgProps } from '@/types';

export const ChevronDownIcon = ({
  size = '24px',
  color = 'currentColor',
  className,
}: SvgProps): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={3}
      width={size}
      height={size}
      color={color}
      stroke='currentColor'
      className={className}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  );
};
