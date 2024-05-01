// This is the order of the show
export enum View {
  HELLO = 'hello',
  STANDARDS = 'standards',
  WISHES = 'wishes',
  VERTICALS = 'verticals',
  CALLOUT = 'callout',
  FEATURES = 'features',
}

// State: status
export type Status = {
  error: null | { message: string };
  isLoading: boolean;
  isPlaying: boolean;
};

// Context state
export type ContextState = {
  status: Status;
  view: View;
};

// Context value
export type ContextValue = {
  state: ContextState;
  actions: {
    toggleMode: () => void;
    setError: (message: string) => void;
  };
};
