export type ValueChecker = <T extends unknown>(value: T) => boolean;

const defaultChecker: ValueChecker = (value) => {
  return value !== undefined && value !== null && value !== '';
};

/**
 * Validate if value is defined. It will check by default if value is different from undefined, null or empty string, the check can be customized.
 * @param value value to validate if is defined
 * @param valueChecker the value checker to use.
 */
export function def<T extends unknown>(
  value: T,
  valueChecker: ValueChecker = defaultChecker,
): boolean {
  return valueChecker(value);
}
