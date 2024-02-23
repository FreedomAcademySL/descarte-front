import { cloneElement, PropsWithChildren, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button, ButtonProps } from '../button/button.component';
import { IconProps } from '../icons/icon.models';

interface IconButtonProps extends ButtonProps {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  iconSize?: number | string;
}

export const IconButton = ({
  children,
  className,
  style,
  startIcon,
  endIcon,
  disabled = false,
  type = 'button',
  iconSize = 12,
  onClick,
  dataTestId,
}: PropsWithChildren<IconButtonProps>): JSX.Element => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={twMerge('inline-flex items-center gap-2', className)}
      style={style}
      dataTestId={dataTestId}
    >
      {startIcon && cloneElement<IconProps>(startIcon, { size: iconSize })}
      {children && <span>{children}</span>}
      {endIcon && cloneElement<IconProps>(endIcon, { size: iconSize })}
    </Button>
  );
};
