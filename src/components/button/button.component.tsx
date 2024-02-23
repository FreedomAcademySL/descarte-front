import { cva } from 'class-variance-authority';
import React, {
  CSSProperties,
  MouseEventHandler,
  PropsWithChildren,
} from 'react';

import { mergeClassNames } from '@/utils';

const iconCss = 'flex items-center text-left';
const ButtonVariants = cva('w-full', {
  variants: {
    type: {
      button: 'md:w-52 h-12 rounded-md text-primary-900 font-semibold',
      submit:
        ' md:w-full h-12 rounded-md border-solid border-2 border-golden-primary-dark text-golden-primary-dark font-semibold hover:bg-golden-primary hover:text-bodydark1',
      reset: '',
      sheet: 'bg-green-600 text-white px-4 py-1 text-center rounded-md',
      milestones: 'bg-dark-gray text-white px-4 py-1 text-center rounded-md',
    },
  },
});

type ButtonType =
  | 'button'
  | 'submit'
  | 'reset'
  | 'sheet'
  | 'milestones'
  | undefined;
export interface ButtonProps {
  className?: string;
  style?: CSSProperties;
  dataTestId?: string;
  disabled?: boolean;
  type?: ButtonType;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon?: React.ReactNode;
}

export const Button = ({
  disabled = false,
  children,
  className,
  style,
  type,
  dataTestId,
  onClick,
  icon,
}: PropsWithChildren<ButtonProps>): JSX.Element => {
  return (
    <button
      data-testid={dataTestId}
      className={mergeClassNames(ButtonVariants({ type, className }), iconCss)}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className='mr-4 max-w-[16px]'>{icon}</span>}
      <span className='w-full'>{children}</span>
    </button>
  );
};
