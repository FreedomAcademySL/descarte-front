import { SvgProps } from '@/types';

export const ArrowRightIcon = ({
  size = '24px',
  color = 'currentColor',
}: SvgProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 14 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.23441 0.634217C7.54683 0.321797 8.05336 0.321797 8.36578 0.634217L13.1658 5.43422C13.4782 5.74664 13.4782 6.25317 13.1658 6.56559L8.36578 11.3656C8.05336 11.678 7.54683 11.678 7.23441 11.3656C6.92199 11.0532 6.92199 10.5466 7.23441 10.2342L10.6687 6.7999L1.4001 6.7999C0.958271 6.7999 0.600098 6.44173 0.600098 5.9999C0.600098 5.55807 0.958271 5.1999 1.4001 5.1999H10.6687L7.23441 1.76559C6.92199 1.45317 6.92199 0.946636 7.23441 0.634217Z'
        fill={color}
      />
    </svg>
  );
};
