import { BaseEnvironment } from './base-environment.class';

export class MobileEnvironment extends BaseEnvironment {
  constructor(
    public production: boolean,
    public endpoint: string,
    public version: string,
    public translations: string[]
  ) {
    super();
    this.translations = [...translations, ...['core', 'shared']];
  }
}

export class ServerEnvironment extends BaseEnvironment {
  constructor(public production: boolean, public endpoint: string, public version: string) {
    super();
  }
}
