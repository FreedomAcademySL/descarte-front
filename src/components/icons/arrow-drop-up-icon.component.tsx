import { SvgProps } from '@/types';

export const ArrowDropDownIcon = ({
  width = '10',
  height = '5',
  color = 'currentColor',
  className,
}: SvgProps): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox='0 0 10 5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M0 0L5 5L10 0H0Z' fill={color} />
    </svg>
  );
};
