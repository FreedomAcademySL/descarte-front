import {
  FieldErrors,
  FieldValues,
  FormState,
  useForm,
  ValidationMode,
  Control,
  UseFormGetValues,
  UseFormRegister,
  UseFormReset,
  UseFormClearErrors,
  UseFormSetValue,
  UseFormWatch,
  UseFormSetError,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObjectSchema } from 'yup';
import { FormEventHandler } from 'react';
import {
  DefaultValues,
  UseFormSetFocus,
  UseFormTrigger,
} from 'react-hook-form/';

/**
 * This Store provides all the basic elements to manage a controlled or uncontrolled form.
 */
export interface FormValidationsStore<T extends FieldValues> {
  /**
   * This will contain all the errors per field
   */
  errors: FieldErrors;
  setFocus: UseFormSetFocus<T>;
  /**
   * The function allows you to manually set one or more errors.
   */
  setError: UseFormSetError<T>;
  /**
   * This function can manually clear errors in the form.
   **/
  clearErrors: UseFormClearErrors<T>;
  /**
   * This object is used to register fields to be tracked by react hook form in uncontrolled forms.
   */
  register: UseFormRegister<T>;
  /**
   * This object is used to register controlled fields by react hook form.
   */
  control: Control<T>;
  /**
   * This is a handler that needs to be on the onSubmit event handler of the form.
   */
  submit: FormEventHandler;
  /**
   * This object is used to reset values of the form.
   */
  reset: UseFormReset<T>;
  /**
   * This function allows you to dynamically set the value of a registered field.
   */
  setValue: UseFormSetValue<T>;
  /**
   * This function allows you to dynamically get the value of a registered field.
   */
  getValues: UseFormGetValues<T>;
  /**
   * This function allows you to dynamically watch the value changes of a registered field.
   */
  watch: UseFormWatch<T>;
  /**
   * This object contains information about the entire form state. It helps you to keep on track with the user's interaction with your form application.
   */
  formState: FormState<T>;
  trigger: UseFormTrigger<T>;
}

export interface FormValidationsProps<T> {
  /**
   * The yup schema to be used on validations.
   */
  schema: AnyObjectSchema;
  /**
   * This option allows you to configure the validation strategy before user submit the form (onSubmit event).
   */
  mode?: keyof ValidationMode;
  /**
   * Callback function to be executed after validations succeed.
   * @param data the submitted data.
   */
  onSubmit?: (data: T) => void;
  defaultValues?: DefaultValues<T>;
}

/**
 * This function hook is meant to be used inside the custom form hook function,
 * the idea is to provide form validations using yup and this hook provides that.
 * @param schema the yup schema to be used on validations.
 * @param onSubmit a callback function to be executed after the validations succeed and the form gets submitted.
 * @param mode This option allows you to configure the validation strategy before user submit the form (onSubmit event).
 * @param defaultValues sets the default form values.
 */
export function useFormValidations<T extends FieldValues>({
  schema,
  onSubmit,
  mode = 'onSubmit',
  defaultValues,
}: FormValidationsProps<T>): FormValidationsStore<T> {
  const {
    control,
    formState,
    formState: { errors },
    clearErrors,
    getValues,
    handleSubmit,
    setValue,
    setError,
    setFocus,
    register,
    reset,
    trigger,
    watch,
  } = useForm<T>({
    resolver: yupResolver(schema),
    mode: mode,
    defaultValues,
  });

  const submit = handleSubmit((data: DefaultValues<FieldValues>) => {
    if (onSubmit !== undefined) onSubmit(data as T);
  });

  return {
    control,
    formState,
    errors,
    clearErrors,
    getValues,
    setValue,
    setError,
    submit,
    setFocus,
    register,
    reset,
    trigger,
    watch,
  };
}
