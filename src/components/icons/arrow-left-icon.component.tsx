import { SvgProps } from '@/types';

export const ArrowLeftIcon = ({
  size = '24px',
  color = 'currentColor',
  className,
}: SvgProps): JSX.Element => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox='0 0 27 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M24.6665 11.3333H6.0498L14.1831 3.19999C14.8331 2.54999 14.8331 1.48333 14.1831 0.833325C13.5331 0.183325 12.4831 0.183325 11.8331 0.833325L0.849805 11.8167C0.199805 12.4667 0.199805 13.5167 0.849805 14.1667L11.8331 25.15C12.4831 25.8 13.5331 25.8 14.1831 25.15C14.8331 24.5 14.8331 23.45 14.1831 22.8L6.0498 14.6667H24.6665C25.5831 14.6667 26.3331 13.9167 26.3331 13C26.3331 12.0833 25.5831 11.3333 24.6665 11.3333Z'
        fill={color}
      />
    </svg>
  );
};
