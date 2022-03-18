import { SeverityType } from './severity-type.enum';

export class MessageType {
  constructor(
    public id: string,
    public blockingCode: string,
    public description: string,
    public severityType: SeverityType
  ) {}
}
