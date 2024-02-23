import { twMerge } from 'tailwind-merge';

export interface ChipProps {
  text: string;
  color?: ChipColor;
  className?: string;
}

export enum ChipColor {
  Primary = 'bg-bodydark1 text-strokedark',
  Secondary = 'bg-bg-progress text-text-progress',
  Success = 'bg-bg-success text-text-success',
  Error = 'bg-meta-1 text-white',
}

export const Chip = ({
  text,
  color = ChipColor.Primary,
  className,
}: ChipProps): JSX.Element => {
  return (
    <span
      className={twMerge(
        `py-1 px-3 border-1 rounded-md text-xs leading-4 font-normal`,
        color,
        className,
      )}
    >
      {text}
    </span>
  );
};
