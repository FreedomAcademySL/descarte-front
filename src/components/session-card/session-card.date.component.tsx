import React from 'react';

interface Props {
  sessionDate: string;
}

const SessionDate: React.FC<Props> = ({ sessionDate }): JSX.Element => {
  return <div className='text-lg text-center'>{sessionDate}</div>;
};

export default SessionDate;
