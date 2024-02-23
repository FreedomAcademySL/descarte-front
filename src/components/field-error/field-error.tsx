import { ErrorMessage } from '@hookform/error-message';

import { FormFieldErrorProps } from './field-error.models';

export const FieldError = ({
  errors,
  name,
}: FormFieldErrorProps): JSX.Element => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }): JSX.Element => (
        <p style={{ fontSize: '12px', color: 'red' }}>{message}</p>
      )}
    />
  );
};
