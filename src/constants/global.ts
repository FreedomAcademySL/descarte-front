export enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  STAGING = 'staging',
}

export interface EnvironmentVariables {
  API_BASE_PATH: string;
  ENVIRONMENT: Environment;
  STRICT_MODE_ON: boolean;
  GENERATE_SOURCEMAP: boolean;
}

export const DEFAULT_ENV_VALUES: EnvironmentVariables = {
  API_BASE_PATH: 'http://localhost:4000/api',
  ENVIRONMENT: Environment.DEVELOPMENT,
  STRICT_MODE_ON: true,
  GENERATE_SOURCEMAP: false,
};
