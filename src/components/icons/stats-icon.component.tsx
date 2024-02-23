import { SvgProps } from '@/types';

export const StatsIcon = ({
  width = '18',
  height = '19',
}: SvgProps): JSX.Element => {
  return (
    <svg
      fill='#FFF'
      width={width}
      height={height}
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M1.75 13.25V1.5H.5v12a1.24 1.24 0 0 0 1.22 1H15.5v-1.25z' />
      <path d='M3.15 8H4.4v3.9H3.15zm3.26-4h1.26v7.9H6.41zm3.27 2h1.25v5.9H9.68zm3.27-3.5h1.25v9.4h-1.25z' />
    </svg>
  );
};
