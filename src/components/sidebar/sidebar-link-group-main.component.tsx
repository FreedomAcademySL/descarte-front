'use client';
import { ReactNode, useState } from 'react';

interface SidebarLinkGroupProps {
  children: (handleClick: () => void, open: boolean) => ReactNode;
  activeCondition: boolean;
}

export const SidebarLinkGroup = ({
  children,
  activeCondition,
}: SidebarLinkGroupProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(activeCondition);

  const handleClick = (): void => {
    setOpen(!open);
  };

  return <li>{children(handleClick, open)}</li>;
};
