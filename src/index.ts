import { CREDIT_CARD_CONFIG } from './constant';
import { CreditCardConfig } from '../types/CreditCardConfig';

export default function getCreditCardOperatorByInitalsNumber(creditNumber: string = ''): string {
  try {
    const normalizedCreditNumber = creditNumber.replace(/\s/g, '');
    const result =  CREDIT_CARD_CONFIG.find(creditcard => !!creditcard.regexpBin.test(normalizedCreditNumber));
      return (result as CreditCardConfig).name;
  } catch(e) {
    throw `${creditNumber} is an invalid value, please enter with a valid credit card number!`
  }
}