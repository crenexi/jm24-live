import { ReactNode, FC, createContext, useState } from 'react';
import useContentful from '@hooks/use-contentful';
import { Wish, NewWish } from '../../Wish.types';
import {
  WisherState,
  WisherError,
  WisherContextType,
} from './WisherContext.types';

// Default wisher state
const defaultState: WisherState = {
  wish: {
    sender: '',
    message: '',
  },
  isValid: false,
  isSending: false,
  isSuccess: false,
};

// Helper: validate state
const isValidWish = (wish: NewWish) => {
  return wish.sender.trim().length > 2 && wish.message.trim().length > 5;
};

// Wisher Context
const WisherContext = createContext<WisherContextType | undefined>(undefined);

// Wisher Provider
type ProviderProps = { children: ReactNode };
export const WisherProvider: FC<ProviderProps> = ({ children }) => {
  const [state, setState] = useState<WisherState>(defaultState);
  const [error, setError] = useState<WisherError>(null);
  const { listful } = useContentful<Wish>('jm24/wish');

  // Resets to default state
  const reset = () => {
    setState(defaultState);
    setError(null);
  };

  // Handles input changes
  const handleChange = (field: keyof Wish, value: string) => {
    setState((prevState) => {
      const wish = { ...prevState.wish, [field]: value };
      const isValid = isValidWish(wish);

      return { ...prevState, wish, isValid };
    });
  };

  // Handles wish submission
  const handleSend = async () => {
    setState((prevState) => ({ ...prevState, isSending: true }));

    try {
      const data = await listful.add(state.wish);

      if (data) {
        setState((prevState) => ({
          ...prevState,
          isSending: false,
          isSuccess: true,
        }));
      } else {
        setError({
          message: 'An unknown error occurred. Sorry.',
        });

        setState((prevState) => ({
          ...prevState,
          isSending: false,
        }));
      }
    } catch (err) {
      let message = 'Failed to send the wish. Please try again.';
      if (err instanceof Error && err.message) message = err.message;
      setError({ message });

      setState((prevState) => ({
        ...prevState,
        isSending: false,
      }));
    }
  };

  return (
    <WisherContext.Provider
      value={{ error, state, reset, handleChange, handleSend }}
    >
      {children}
    </WisherContext.Provider>
  );
};

export default WisherContext;
