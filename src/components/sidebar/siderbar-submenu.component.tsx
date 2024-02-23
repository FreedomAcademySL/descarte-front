import React, { useState } from 'react';
import { IconType } from 'react-icons/lib';

interface SideBarSubmenuProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
  Icon: IconType;
}

export const SideBarSubmenu: React.FC<SideBarSubmenuProps> = ({
  title,
  children,
  Icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  const childrenArray = Array.isArray(children) ? children : [children];
  return (
    <div>
      <span
        className='group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium cursor-pointer text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4'
        onClick={handleOpen}
      >
        <Icon />
        {title}
      </span>
      {isOpen && (
        <ul className='ml-6'>
          {childrenArray.map((child, index) => (
            <li key={index}>{child}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
