import { ReactNode as Node, FC, useEffect, useState, createContext } from 'react'; // prettier-ignore
import { Views, ViewsContextState, ViewsContextActions, ViewsContextValue } from '@stypes/View.types'; // prettier-ignore
import useQueryParam from '@hooks/use-query-param';

export const viewDurations = {
  [Views.HELLO]: 15_000, // TODO: set to 55 seconds
  [Views.STANDARDS]: 15_000, // TODO: set to 90 seconds (30-sec swaps)
  [Views.WISHES]: 15_000, // TODO: set to 65 seconds
  [Views.VERTICALS]: 15_000, // TODO: set to 90 seconds (30-sec swaps)
  [Views.CALLOUT]: 15_000, // TODO: set to 45 seconds
  [Views.FEATURES]: 15_000, // TODO: set to 75 seconds
};

// Default state
export const defaultState: ViewsContextState = {
  view: Views.HELLO,
  error: null,
  status: {
    isLoading: true,
    isPlaying: false,
  },
};

// Views Context
const ViewsContext = createContext<ViewsContextValue | undefined>(undefined);

// Views Provider
export const ViewsProvider: FC<{ children: Node }> = ({ children }) => {
  const [state, setState] = useState<ViewsContextState>(defaultState);
  const [viewParam, setViewParam] = useQueryParam('view');

  // View param changes
  useEffect(() => {
    const newView = viewFromParam(viewParam);

    if (newView !== state.view) {
      setState((prevState) => ({
        ...prevState,
        view: newView,
        status: { ...prevState.status, isLoading: false },
      }));
    }
  }, [viewParam]);

  // Playing state
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (state.status.isPlaying) {
      timeout = setTimeout(() => {
        const nextView = getNextView(state.view);
        setViewParam(nextView);
        setState((prevState) => ({ ...prevState, view: nextView }));
      }, viewDurations[state.view]);
    }

    return () => clearTimeout(timeout);
  }, [state.view, state.status.isPlaying, setViewParam]);

  // View actions
  const actions: ViewsContextActions = {
    toggleMode: () => {
      setState((prevState) => ({
        ...prevState,
        status: {
          ...prevState.status,
          isPlaying: !state.status.isPlaying,
        },
      }));
    },
    setError: (message: string) => {
      setState((prevState) => ({
        ...prevState,
        error: message ? { message } : null,
      }));
    },
  };

  return (
    <ViewsContext.Provider value={{ state, actions }}>
      {children}
    </ViewsContext.Provider>
  );
};

// Helper: get View from param string
function viewFromParam(param: string | null): Views {
  if (param && Object.values(Views).includes(param as Views)) {
    return param as Views;
  }

  // Default view
  return Views.HELLO;
}

// Helper: get the next view
function getNextView(currView: Views): Views {
  const viewVals = Object.values(Views) as string[];
  const currIndex = viewVals.indexOf(currView);
  const nextIndex = (currIndex + 1) % viewVals.length;
  return viewVals[nextIndex] as Views;
}

export default ViewsContext;
