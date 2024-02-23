'use client';

import {
  HTMLInputTypeAttribute,
  MutableRefObject,
  FocusEvent,
  useState,
} from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import { def } from '@/utils';
import { EyePasswordHide, EyePasswordShow, FieldError } from '@/components';

interface InputFieldProps<T extends FieldValues> {
  name: string;
  placeholder: string;
  required?: boolean;
  isDateType?: boolean;
  isPasswordType?: boolean;
  containerClassName?: string;
  value?: string;
  className?: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  type?: HTMLInputTypeAttribute;
  ref?: MutableRefObject<HTMLInputElement>;
  control: Control<T>;
  errors: FieldErrors<T>;
  handleOnBlur?: () => void;
  onChange?: (newValue: string) => void;
}

export const InputField = <T extends FieldValues>({
  control,
  errors,
  name,
  placeholder,
  containerClassName,
  className,
  startIcon,
  required = false,
  isDateType = false,
  type = 'text',
  endIcon,
  ref,
  handleOnBlur,
  isPasswordType,
}: InputFieldProps<T>): JSX.Element => {
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(type);
  const startIconClass = def(startIcon) && 'pl-10';
  const endIconClass = def(endIcon) && 'pr-10';

  const handleInputType = (): void => {
    setInputType((prevState) => (prevState === 'text' ? 'password' : 'text'));
  };

  const handleDatePlaceHolder = (
    event: FocusEvent<HTMLInputElement, Element>,
  ): void => {
    if (isDateType) {
      event.target.type = 'date';
    }
  };

  return (
    <div
      className={twMerge(
        'relative text-gray-600 focus-within:text-gray-400',
        containerClassName,
      )}
    >
      <Controller
        name={name as Path<T>}
        control={control}
        render={({ field: { onChange, onBlur, value } }): JSX.Element => (
          <div>
            {def(startIcon) && (
              <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                {startIcon}
              </span>
            )}
            <input
              ref={ref}
              name={name}
              type={inputType}
              placeholder={placeholder}
              onFocus={(event) => handleDatePlaceHolder(event)}
              required={required}
              onBlur={(event): void => {
                onBlur();
                handleOnBlur && handleOnBlur();
                handleDatePlaceHolder(event);
              }}
              onChange={(event): void => {
                onChange(event);
              }}
              value={value ?? ''}
              className={twMerge(
                'placeholder:text-neutral-400 placeholder:font-light placeholder:text-sm py-2 px-3 border-solid border rounded-md border-gray-300 w-full',
                className,
                startIconClass,
                endIconClass,
              )}
            />
            {required && (
              <span className='absolute inset-y-0 right-2 flex items-center pl-2'>
                <span className='p-1 focus:outline-none focus:shadow-outline text-error-primary'>
                  *
                </span>
              </span>
            )}
            {def(endIcon) && (
              <span className='absolute inset-y-0 right-0 flex items-center pl-2'>
                {endIcon}
              </span>
            )}
            {isPasswordType && (
              <span
                onClick={handleInputType}
                className='absolute inset-y-0 right-2 bottom-5 flex items-center'
              >
                {inputType === 'password' && <EyePasswordHide size={20} />}
                {inputType === 'text' && <EyePasswordShow size={20} />}
              </span>
            )}
          </div>
        )}
      />
      <FieldError errors={errors} name={name} />
    </div>
  );
};
