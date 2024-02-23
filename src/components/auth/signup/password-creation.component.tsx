'use client';

import { TFunction } from 'i18next';

interface PasswordCreationMessageProps {
  t: TFunction<string, string>;
}

export const PasswordCreationMessage = ({
  t,
}: PasswordCreationMessageProps): JSX.Element => {
  return (
    <div className='w-full md:w-full text-golden-primary-dark text-center'>
      {t('password-creation-message')}
    </div>
  );
};
