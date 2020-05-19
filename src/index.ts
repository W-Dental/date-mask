import { LETTERS_REGEX, ONLY_NUMBERS_REGEX } from './constant';

export default function birthDateMask(num = ''): string {
  if (typeof num !== 'string' || LETTERS_REGEX.test(num)) {
    throw new Error(
      'You must to pass a digits as string with pattern DD/MM/YYYY or MM/DD/YYYY'
    )
  }

  const numString = num.replace(ONLY_NUMBERS_REGEX, '');

  if (numString.length === 3)
    return numString.replace(/(\d{2})/, '$1/');
  if (numString.length > 3 && numString.length < 5)
    return numString.replace(/(\d{2})(\d+)/, '$1/$2');
  if (numString.length >= 5 && numString.length <= 8)
    return numString.replace(/(\d{2})(\d{2})(\d+)/, '$1/$2/$3');
  else
    return numString.substring(0, 10);
}
