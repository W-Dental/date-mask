import { CREDIT_CARD_CONFIG } from './constant';

export default function getCreditCardOperatorByInitalsNumber(creditNumber = ''): string {
  try {
    const normalizedCreditNumber = creditNumber.replace(/\s/g, '');
    const result =  CREDIT_CARD_CONFIG.find(creditcard => creditcard.regexpBin.test(normalizedCreditNumber));
    return result!.name;
  } catch(e) {
    throw new Error(`${creditNumber} is an invalid value or type, please see documentations for more infos!`);
  }
}