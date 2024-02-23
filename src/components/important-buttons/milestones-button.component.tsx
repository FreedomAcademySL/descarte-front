import React from 'react';
import { Button } from '../button/button.component';
import { PiChartLineBold } from 'react-icons/pi';
import Link from 'next/link';

export const MilestonesButton: React.FC = (): JSX.Element => {
  return (
    <Link href='/dashboard/milestones'>
      <Button icon={<PiChartLineBold />} type={'milestones'}>
        Milestones Monitor
      </Button>
    </Link>
  );
};
