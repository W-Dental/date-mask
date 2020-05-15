import { CREDIT_CARD_CONFIG } from './constant';
import { CreditCardConfig } from '../types/CreditCardConfig';

export default function getCreditCardOperatorByInitalsNumber(creditNumber = ''): string {
  try {
    const normalizedCreditNumber = creditNumber.replace(/\s/g, '');
    const result =  CREDIT_CARD_CONFIG.find(creditcard => creditcard.regexpBin.test(normalizedCreditNumber));
    return result!.name;
  } catch(e) {
    throw `${creditNumber} is an invalid value or type, please see documentations for more infos!`
  }
}