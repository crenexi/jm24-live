// ## Data ####################################################################

export type ContentfulConfig = {
  apiBaseUrl: string;
  apiKey: string;
};

export type WithId = { id: string };

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

type ReadFn<T> = (endpoint: string) => Promise<T[]>;
type CreateFn<T> = (endpoint: string, data: object) => Promise<T>;
type DeleteFn<T> = (endpoint: string) => Promise<T>;

export type ContentfulService<T> = {
  read: ReadFn<T>;
  create: CreateFn<T>;
  delete: DeleteFn<T>;
};
