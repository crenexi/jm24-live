import { ReactNode as Node, FC, useEffect, useState, createContext } from 'react'; // prettier-ignore
import { View, ContextState, ContextValue } from '@stypes/View.types';
import useQueryParam from '@hooks/use-query-param';

export const viewDurations = {
  [View.HELLO]: 15_000, // TODO: set to 55 seconds
  [View.STANDARDS]: 15_000, // TODO: set to 90 seconds (30-sec swaps)
  [View.WISHES]: 15_000, // TODO: set to 65 seconds
  [View.VERTICALS]: 15_000, // TODO: set to 90 seconds (30-sec swaps)
  [View.CALLOUT]: 15_000, // TODO: set to 45 seconds
  [View.FEATURES]: 15_000, // TODO: set to 75 seconds
};

// Default state
export const defaultState: ContextState = {
  view: View.HELLO,
  status: {
    error: null,
    isLoading: true,
    isPlaying: false,
  },
};

// Views Context
const ViewsContext = createContext<ContextValue | undefined>(undefined);

// Views Provider
export const ViewsProvider: FC<{ children: Node }> = ({ children }) => {
  const [state, setState] = useState<ContextState>(defaultState);
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
  const actions = {
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
function viewFromParam(param: string | null): View {
  if (param && Object.values(View).includes(param as View)) {
    return param as View;
  }

  // Default view
  return View.HELLO;
}

// Helper: get the next view
function getNextView(currView: View): View {
  const viewVals = Object.values(View) as string[];
  const currIndex = viewVals.indexOf(currView);
  const nextIndex = (currIndex + 1) % viewVals.length;
  return viewVals[nextIndex] as View;
}

export default ViewsContext;
