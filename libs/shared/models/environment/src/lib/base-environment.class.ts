import { Currency } from './currency.enum';
import { Language } from './language.enum';

export class BaseEnvironment {
  constructor(public dateFormat?: string, public languages?: Language[], public currencies?: Currency[]) {
    this.dateFormat = 'YYYY-MM-DD HH:mm:ssZ';
    this.languages = [Language.EN, Language.FR, Language.NL];
    this.currencies = [Currency.EN, Currency.FR, Currency.NL];
  }
}
