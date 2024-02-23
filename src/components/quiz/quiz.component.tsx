import React from 'react';
import { AnswerProps } from './quiz-answer.component';
export interface QuizProps {
  uuid: string;
  question: string;
  answers: AnswerProps[];
}
export interface QuizNumberProps {
  questionNumber: number;
}

export const Quiz: React.FC<QuizProps & QuizNumberProps> = ({
  uuid,
  question,
  questionNumber,
  answers,
}): JSX.Element => {
  return (
    <>
      <div className='mb-1'>Pregunta {questionNumber}</div>
      <h1 className='mb-4 text-lg font-bold'>{question}</h1>
      <ul>
        {answers.map((answer) => (
          <li key={answer.uuid}>{answer.answer}</li>
        ))}
      </ul>
    </>
  );
};
