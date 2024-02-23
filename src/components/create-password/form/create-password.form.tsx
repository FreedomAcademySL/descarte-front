'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { useParams, useRouter } from 'next/navigation';

import {
  AvailableLanguages,
  TranslationFilesType,
  useTranslationClient,
} from '@/app/i18n';
import {
  Button,
  InputField,
  CreatePasswordSchema,
  CreatePasswordSchemaType,
  TextElement,
} from '@/components';
import { useFormValidations } from '@/hooks';
import { HttpStatus } from '@/constants';
import { AuthService } from '@/services';

enum CreatePasswordFields {
  password = 'password',
  repeatPassword = 'repeatPassword',
}

interface CreatePasswordFormProps {
  lng: AvailableLanguages;
}

export const CreatePasswordForm = ({
  lng,
}: CreatePasswordFormProps): JSX.Element => {
  const { token } = useParams<{ token: string }>();
  const router = useRouter();
  const { t } = useTranslationClient(lng, TranslationFilesType.auth);
  const [isLoading, setIsLoading] = useState(false);

  const { errors, control, submit } =
    useFormValidations<CreatePasswordSchemaType>({
      schema: CreatePasswordSchema,
      onSubmit: async (form: CreatePasswordSchemaType) => {
        try {
          setIsLoading(true);
          const response = await AuthService.mailPasswordCreation({
            newPassword: form.password,
            token,
          });

          if (response.status === HttpStatus.CREATED) {
            router.push('/auth/login');
          } else {
            toast.error('There was an error creating password');
          }

          setIsLoading(false);
        } catch (error) {
          console.log('error', error);
        }
      },
    });

  return (
    <form onSubmit={submit}>
      <div className='flex flex-col justify-center items-center'>
        <TextElement variant='p' text={t('create-password')} className='mb-4' />
        <InputField<CreatePasswordSchemaType>
          name={CreatePasswordFields.password}
          type={CreatePasswordFields.password}
          placeholder={t('newPassword-placeholder')}
          control={control}
          errors={errors}
          className='mb-5 text-slate-950 text-sm '
          containerClassName='w-3/4 md:w-2/4'
          isPasswordType
        />
        <InputField<CreatePasswordSchemaType>
          name={CreatePasswordFields.repeatPassword}
          type={CreatePasswordFields.password}
          placeholder={t('repeat-newPassword-placeholder')}
          control={control}
          errors={errors}
          className='mb-5 text-slate-950 text-sm'
          containerClassName='w-3/4 md:w-2/4'
          isPasswordType
        />
        <div className='w-3/4 md:w-2/4'>
          <Button disabled={isLoading} type='submit' className='h-10 mt-3'>
            {t('button-create')}
          </Button>
        </div>
      </div>
    </form>
  );
};
