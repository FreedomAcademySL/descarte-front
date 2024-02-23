import React from 'react';
import { Button } from '../button/button.component';
import { SiGooglesheets } from 'react-icons/si';

interface SheetButtonProps {
  sheetId: string;
}
export const SheetButton: React.FC<SheetButtonProps> = ({ sheetId }): JSX.Element => {
  const handleClick = () => {
    window.open(`https://docs.google.com/spreadsheets/d/${sheetId}`, '_blank');
  };
  return (
    <Button onClick={handleClick} icon={<SiGooglesheets />} type={'sheet'}>
      Habits Tracking
    </Button>
  );
};
