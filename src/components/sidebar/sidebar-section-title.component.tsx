import React from 'react';

interface SideBarSectionTitleProps {
    title: string;
}

export const SideBarSectionTitle: React.FC<SideBarSectionTitleProps> = ({title}): JSX.Element => {
    return (
        <h3 className='uppercase mb-4 ml-4 text-sm font-semibold text-bodydark2'>
            {title}
        </h3>
    );
};
