import React from 'react';
export interface AnswerProps {
  uuid: string;
  answer: string;
}
export const Answer: React.FC<AnswerProps> = ({ answer }): JSX.Element => {
    return <div>{answer}</div>;
};
