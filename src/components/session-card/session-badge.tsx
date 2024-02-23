import { cva } from 'class-variance-authority';
import React from 'react';

const BadgeVariants = cva('absolute top-0 left-0 py-2 px-8 rounded-tl-xl rounded-tr-xl text-white w-full text-center text-2xl', {
  variants: {
    type: {
      passed: 'bg-success ',
      failed: '',
      pending: 'bg-golden-primary font-bold tracking-wider',
      viewed: 'bg-success',
    },
  },
});
export type BadgeType = 'passed' | 'failed' | 'pending' | 'viewed' | undefined;

interface SessionBadgeProps {
  type: BadgeType;
}
interface SessionBadgeProps {}
export const SessionBadge: React.FC<SessionBadgeProps> = ({
  type,
}): JSX.Element => {
  return (
    <div>
      <span className={BadgeVariants({ type })}>
        {type === 'passed' && 'Passed'}
        {type === 'failed' && 'Failed'}
        {type === 'pending' && 'Pending'}
        {type === 'viewed' && 'Viewed'}
      </span>
    </div>
  );
};
