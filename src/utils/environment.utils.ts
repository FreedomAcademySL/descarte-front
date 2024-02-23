import {
  DEFAULT_ENV_VALUES,
  Environment,
  EnvironmentVariables,
} from '../constants';

function getEnv<
  EnvironmentVariables,
  T extends string | number | boolean | unknown,
>(
  variableName: keyof EnvironmentVariables,
  defaultValues?: EnvironmentVariables,
): T {
  const defaultValue: T | null = defaultValues
    ? (defaultValues[variableName] as T)
    : null;

  let value: T | null;

  if (Object.keys(process.env).indexOf(variableName as string) === -1) {
    variableName = `${variableName.toString()}` as keyof EnvironmentVariables;
  }
  if (Object.keys(process.env).indexOf(variableName as string) !== -1) {
    value = process.env[variableName as string] as T;
  } else {
    value = defaultValue;
  }

  // Handle conversion if defaultValue is not null
  if (defaultValue !== null) {
    switch (typeof defaultValue) {
      case 'number':
        return Number(value) as T;
      case 'boolean':
        return ('true' === value) as T;
      default:
        return value as T;
    }
  }

  // Return value without conversion if defaultValue is null
  return value as T;
}

export function getEnvVariable<T>(variableName: keyof EnvironmentVariables): T {
  return getEnv<EnvironmentVariables, T>(variableName, DEFAULT_ENV_VALUES);
}

export function getEnvironment(): Environment {
  return getEnvVariable('ENVIRONMENT');
}

export function isProduction(): boolean {
  return getEnvironment() === Environment.PRODUCTION;
}

export function isDevelopment(): boolean {
  return getEnvironment() === Environment.DEVELOPMENT;
}

export function isStaging(): boolean {
  return getEnvironment() === Environment.STAGING;
}

export function isEnvironment(environment: Environment): boolean {
  return getEnvironment() === environment;
}
