import { useContext } from 'react';
import { UseSlidesReturn, ToNextPay, ToPrevPay } from '@stypes/Slide.types';
import SlidesContext from '@contexts/SlidesContext';
import { setErrorAction, setLoadingAction, toNextAction, toPrevAction, restartAction } from '@contexts/SlidesContext/actions'; // prettier-ignore

const useSlides = (): UseSlidesReturn => {
  const context = useContext(SlidesContext);

  if (!context?.state || !context?.dispatch) {
    throw new Error('useSlides must be used within a SlidesProvider');
  }

  const { state, dispatch } = context;

  const setError = (p: string) => dispatch(setErrorAction(p));
  const setLoading = (p: boolean) => dispatch(setLoadingAction(p));
  const toNext = (p: ToNextPay) => dispatch(toNextAction(p));
  const toPrev = (p: ToPrevPay) => dispatch(toPrevAction(p));
  const restart = () => dispatch(restartAction());

  return {
    ...state,
    actions: {
      setError,
      setLoading,
      toNext,
      toPrev,
      restart,
    },
  };
};

export default useSlides;
