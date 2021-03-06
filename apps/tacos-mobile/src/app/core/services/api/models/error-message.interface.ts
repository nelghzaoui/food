export interface ErrorMessage {
  id: string;
  blockingCode: string;
  description: string;
  severityType: string;
  status: ErrorStatus;
}

export enum ErrorStatus {
  GENERIC = -1,
  SSL_EXCEPTION = -2,
  SERVER_NOT_FOUND = -3,
  TIMEOUT = -4,
  UNSUPPORTED_URL = -5,
  NOT_CONNECTED = -6,
  POST_PROCESSING_FAILED = -7
}
