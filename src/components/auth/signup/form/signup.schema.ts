// import { MATCH_EMAIL } from '@/constants';
import { object, string, InferType } from 'yup';

export const SignUpSchema = object({
  fullName: string().trim().required('FullName is a required field'),
  lastName: string().trim().required('LastName is a required field'),
  occupation: string().trim().nullable(),
  dob: string().trim().required('Day of birthday is a required field'),
  email: string()
    // .matches(MATCH_EMAIL, 'Must be a valid email')
    .trim()
    .email('Must be a valid email')
    .required('Email is a required field'),
  repeatEmail: string()
    .trim()
    .email('Must be a valid email')
    .test('email-match', 'Emails must match', function (value) {
      return value === this.parent.email;
    })
    .required('Repeat email is a required field'),
  country: string().trim().required('Country is a required field'),
  mainIssue: string().trim().nullable(),
});

export type SignUpSchemaType = InferType<typeof SignUpSchema>;
