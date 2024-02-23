'use client';

import { useState } from 'react';

import {
  AvailableLanguages,
  TranslationFilesType,
  useTranslationClient,
} from '@/app/i18n';
import {
  Button,
  Card,
  FieldError,
  InputField,
  PasswordCreationMessage,
  SignUpSchema,
  SignUpSchemaType,
} from '@/components';
import { HttpStatus } from '@/constants';
import { useFormValidations } from '@/hooks';
import { AuthService } from '@/services';
import { Controller } from 'react-hook-form';

enum SignUpFormFields {
  fullName = 'fullName',
  lastName = 'lastName',
  occupation = 'occupation',
  dob = 'dob',
  email = 'email',
  repeatEmail = 'repeatEmail',
  country = 'country',
  message = 'message',
  mainIssue = 'mainIssue',
}

interface SignUpFormProps {
  lng: AvailableLanguages;
}

export const SignUpForm = ({ lng }: SignUpFormProps): JSX.Element => {
  const { t } = useTranslationClient(lng, TranslationFilesType.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserCreated, setIsUserCreated] = useState(false);

  const { errors, control, submit } = useFormValidations<SignUpSchemaType>({
    schema: SignUpSchema,
    onSubmit: async (form: SignUpSchemaType) => {
      try {
        setIsLoading(true);
        const response = await AuthService.authSignUp({
          fullName: form.fullName,
          lastName: form.lastName,
          occupation: form.occupation,
          dob: form.dob,
          email: form.email,
          country: form.country,
          mainIssue: form.mainIssue,
        });

        if (response.status === HttpStatus.CREATED) {
          // Show sended email page
          setIsUserCreated(true);
        } else {
          console.log('error');
        }

        setIsLoading(false);
      } catch (error) {
        console.log('error', error);
      }
    },
  });

  return (
    <div
      className={`w-full md:w-${isUserCreated ? '2/4' : 'full'} justify-center items-center ${isUserCreated ? 'px-6 md:p-0' : ''}`}
    >
      {isUserCreated ? (
        <div className='flex justify-center items-center w-full h-full'>
          <Card>
            <PasswordCreationMessage t={t} />
          </Card>
        </div>
      ) : (
        <form onSubmit={submit}>
          <div className='flex flex-col text-sm'>
            <div className='flex flex-row mb-3'>
              <InputField<SignUpSchemaType>
                name={SignUpFormFields.fullName}
                placeholder={t('fullName-placeholder')}
                control={control}
                errors={errors}
                className='text-slate-950 text-sm'
                containerClassName='w-3/4 md:w-2/4 p-2'
              />
              <InputField<SignUpSchemaType>
                name={SignUpFormFields.lastName}
                placeholder={t('lastName-placeholder')}
                control={control}
                errors={errors}
                className=' text-slate-950 text-sm '
                containerClassName='w-3/4 md:w-2/4 p-2'
              />
            </div>
            <div className='flex flex-row mb-3'>
              <InputField<SignUpSchemaType>
                name={SignUpFormFields.occupation}
                placeholder={t('occupation-placeholder')}
                className='text-slate-950 text-sm '
                containerClassName='w-3/4 md:w-2/4 p-2'
                control={control}
                errors={errors}
              />
              <InputField<SignUpSchemaType>
                name={SignUpFormFields.dob}
                placeholder={t('dob-placeholder')}
                control={control}
                errors={errors}
                className='text-slate-950 text-sm '
                containerClassName='w-3/4 md:w-2/4 p-2'
                isDateType={true}
              />
            </div>

            <div className='flex flex-row mb-3'>
              <InputField<SignUpSchemaType>
                name={SignUpFormFields.email}
                placeholder={t('email-placeholder')}
                control={control}
                errors={errors}
                className='text-slate-950 text-sm '
                containerClassName='w-3/4 md:w-2/4 p-2'
              />
              <InputField<SignUpSchemaType>
                name={SignUpFormFields.repeatEmail}
                placeholder={t('repeatEmail-placeholder')}
                control={control}
                errors={errors}
                className='text-slate-950 text-sm '
                containerClassName='w-3/4 md:w-2/4 p-2'
              />
            </div>
            <div className='mb-3 p-2'>
              <InputField<SignUpSchemaType>
                name={SignUpFormFields.country}
                placeholder={t('country-placeholder')}
                control={control}
                errors={errors}
                className='text-slate-950 text-sm p-2'
                containerClassName='w-full'
              />
            </div>
            <div className='mb-3 p-2'>
              <Controller
                name={SignUpFormFields.mainIssue}
                control={control}
                render={({
                  field: { onChange, onBlur, value },
                }): JSX.Element => (
                  <textarea
                    name={SignUpFormFields.mainIssue}
                    placeholder={t('mainIssue-placeholder')}
                    value={value ?? ''}
                    onBlur={onBlur}
                    onChange={onChange}
                    className='h-32 text-placeholder:text-neutral-400 placeholder:font-light placeholder:text-sm placeholder:pt-1 py-2 px-3 border-solid border rounded-md border-gray-300 w-full text-slate-950 focus-within:text-gray-400'
                  />
                )}
              />
            </div>
            <FieldError errors={errors} name={SignUpFormFields.mainIssue} />
            <div className='w-full p-2'>
              <Button type='submit' className='h-10' disabled={isLoading}>
                {t('button-signup')}
              </Button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
