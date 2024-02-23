'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  AvailableLanguages,
  TranslationFilesType,
  useTranslationClient,
} from '@/app/i18n';
import { Button, InputField, LoginSchema, LoginSchemaType } from '@/components';
import { useFormValidations } from '@/hooks';
import {
  removeTokensFromLocalStorage,
  setTokensIntoLocalStorage,
} from '@/utils';
import { AuthResponse } from '@/dtos';
import { HttpStatus } from '@/constants';
import { AuthService } from '@/services';
import { toast } from 'react-toastify';

enum LoginFormFields {
  email = 'email',
  password = 'password',
}

interface LoginFormProps {
  lng: AvailableLanguages;
}

export const LoginForm = ({ lng }: LoginFormProps): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslationClient(lng, TranslationFilesType.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessLogin, setIsSuccessLogin] = useState(false);
  const [data, setData] = useState<AuthResponse>();
  const [isErrorLogin, setIsErrorLogin] = useState(false);

  const failureHandler = useCallback(() => {
    removeTokensFromLocalStorage();
    toast.error('There was a problem with the login');
  }, []);

  const successHandler = useCallback(() => {
    if (data) {
      const {
        accessToken,
        refreshToken,
        payload: { email },
      } = data;

      if (!email || !accessToken || !refreshToken) {
        toast.error('Couldn t get logging data');
        return;
      }
      removeTokensFromLocalStorage();
      setTokensIntoLocalStorage(accessToken, refreshToken);
      router.push('/');
    }
  }, [data]);

  const { errors, control, submit } = useFormValidations<LoginSchemaType>({
    schema: LoginSchema,
    onSubmit: async (form: LoginSchemaType) => {
      try {
        setIsLoading(true);
        const response = await AuthService.authLogin({
          email: form.email,
          password: form.password,
        });

        if (response.status === HttpStatus.CREATED) {
          setIsSuccessLogin(true);
          setData(response.data);
        } else {
          setIsErrorLogin(true);
        }

        setIsLoading(false);
      } catch (error) {
        console.log('error', error);
      }
    },
  });

  useEffect(() => {
    if (isSuccessLogin) {
      successHandler();
    }
  }, [isSuccessLogin, successHandler]);

  useEffect(() => {
    if (isErrorLogin) {
      failureHandler();
    }
  }, [isErrorLogin, failureHandler]);

  return (
    <form onSubmit={submit}>
      <div className='flex flex-col justify-center items-center'>
        <InputField<LoginSchemaType>
          name={LoginFormFields.email}
          placeholder={t('email-placeholder')}
          control={control}
          errors={errors}
          className='mb-5 text-slate-950 text-sm '
          containerClassName='w-3/4 md:w-2/4'
        />
        <InputField<LoginSchemaType>
          name={LoginFormFields.password}
          type={LoginFormFields.password}
          placeholder={t('password-placeholder')}
          control={control}
          errors={errors}
          className='mb-5 text-slate-950 text-sm'
          containerClassName='w-3/4 md:w-2/4'
          isPasswordType
        />
        <div className='w-3/4 md:w-2/4'>
          <Button disabled={isLoading} type='submit' className='h-10 mt-3'>
            {t('button-login')}
          </Button>
        </div>
      </div>
    </form>
  );
};
