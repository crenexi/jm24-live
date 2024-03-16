import { NewWish } from '../../Wish.types';

export type WisherError = null | {
  message: string;
};

export type WisherState = {
  wish: NewWish;
  isValid: boolean;
  isSending: boolean;
  isSuccess: boolean;
};

export type WisherContextType = {
  error: WisherError;
  state: WisherState;
  reset: () => void;
  handleChange: (field: keyof NewWish, value: string) => void;
  handleSend: () => void;
};
