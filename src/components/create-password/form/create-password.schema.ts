import { object, string, InferType } from 'yup';

import { MIN_LENGTH_PASSWORD } from '@/constants';

export const CreatePasswordSchema = object({
  password: string()
    .trim()
    .required('Password is a required field')
    .min(MIN_LENGTH_PASSWORD),
  repeatPassword: string()
    .trim()
    .min(MIN_LENGTH_PASSWORD)
    .test('password-match', 'Password must match', function (value) {
      return value === this.parent.password;
    })
    .required('Repeat password please'),
});

export type CreatePasswordSchemaType = InferType<typeof CreatePasswordSchema>;
