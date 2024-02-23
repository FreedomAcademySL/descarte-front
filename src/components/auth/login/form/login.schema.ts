import { object, string, InferType } from 'yup';

import { MIN_LENGTH_PASSWORD } from '@/constants';

export const LoginSchema = object({
  email: string()
    .trim()
    .email('Must be a valid email')
    .required('Email is a required field'),
  password: string()
    .trim()
    .required('Email is a required field')
    .min(MIN_LENGTH_PASSWORD),
});

export type LoginSchemaType = InferType<typeof LoginSchema>;
