import { FieldErrors } from 'react-hook-form';

export interface FormFieldErrorProps {
  errors?: FieldErrors;
  name: string;
}
