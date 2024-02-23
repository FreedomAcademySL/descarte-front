export const MAX_LENGTH_DESCRIPTION = 1000;
export const MIN_LENGTH_PASSWORD = 8;
export const MIN_LOWER_CASE_LETTERS_PASSWORD = 1;
export const MIN_UPPER_CASE_LETTERS_PASSWORD = 1;
export const MIN_NUMBERS_PASSWORD = 1;
export const MIN_SPECIAL_CHARS_PASSWORD = 1;
export const passwordSettings = {
  minLength: MIN_LENGTH_PASSWORD,
  minLowerCaseLetters: MIN_LOWER_CASE_LETTERS_PASSWORD,
  minUpperCaseLetters: MIN_UPPER_CASE_LETTERS_PASSWORD,
  minNumbers: MIN_NUMBERS_PASSWORD,
  minSpecialChars: MIN_SPECIAL_CHARS_PASSWORD,
};
export const FORMAT_NUMBER = '+12025550146';
export const FORMAT_WEBSITE = 'https://www.mysite.com';
export const VALID_PHONE_REGEX =
  /^[+]?((\\+[1-9]{1,9}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const VALID_WEBSITE_REGEX =
  /^(https?:\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/g;

export const NO_SPACES_REGEX = /^\s*\S+\s*$/g;

export const MAX_INPUT_TEXT_LENGTH = 255;

export const MATCH_EMAIL =
  /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)+$/;
