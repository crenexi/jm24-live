import { Slide } from '@stypes/Slide.types';

// ## Data ####################################################################

export type PhotoServiceConfig = {
  apiBaseUrl: string;
  apiKey: string;
};

// ## Error ###################################################################

type ErrType = 'NetworkErr' | 'APIErr' | 'UnknownErr';
export class Err extends Error {
  status: number;

  type: ErrType;

  constructor(message: string, status: number, type: ErrType) {
    super(message);
    this.status = status;
    this.type = type;
  }
}

// ## Helpers #################################################################

export type TimeoutSignalFn = (ms?: number) => AbortSignal;
export type HandleTimeoutErrFn = (err: Err) => Err;
export type HandleUnknownErrFn = (err: Err) => Err;

// ## Service #################################################################

export type PhotoService = {
  read: (albumId: string) => Promise<Slide[]>;
};
