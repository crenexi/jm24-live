// This is the order of the show
export enum Views {
  HELLO = 'hello',
  STANDARDS = 'standards',
  WISHES = 'wishes',
  VERTICALS = 'verticals',
  CALLOUT = 'callout',
  FEATURES = 'features',
}

// State: error
export type ViewsError = null | {
  message: string;
};

// State: status
export type ViewsStatus = {
  isLoading: boolean;
  isPlaying: boolean;
};

// Context state
export type ViewsContextState = {
  view: Views;
  error: ViewsError;
  status: ViewsStatus;
};

// Context actions
export type ViewsContextActions = {
  toggleMode: () => void;
  setError: (message: string) => void;
};

// Context value (state and actions)
export type ViewsContextValue = {
  state: ViewsContextState;
  actions: ViewsContextActions;
};
