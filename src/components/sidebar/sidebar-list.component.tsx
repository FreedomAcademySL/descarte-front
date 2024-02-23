import { mergeClassNames } from '@/utils';
import React, { ReactNode } from 'react';
interface SideBarListProps {
  className?: string;
  children: JSX.Element[] | JSX.Element;
}
export const SideBarList: React.FC<SideBarListProps> = ({
  children,
  className
}: SideBarListProps): JSX.Element => {
  const childrenArray = Array.isArray(children) ? children : [children];
  return (
    <ul className={mergeClassNames('mb-6 flex flex-col gap-1.5', className)}>
      {childrenArray.map((child, index) => (
        <li key={index}>{child}</li>
      ))}
    </ul>
  );
};
