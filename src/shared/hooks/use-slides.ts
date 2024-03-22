import { useContext } from 'react';
import SlidesContext from '@contexts/SlidesContext';
import { SlidesContextValue } from '@contexts/SlidesContext/types';

type UseSlidesContext = () => SlidesContextValue;

const useSlidesContext: UseSlidesContext = () => {
  const context = useContext(SlidesContext);

  if (context === undefined) {
    throw new Error('useSlidesContext must be used within a SlidesProvider');
  }

  return context;
};

export default useSlidesContext;
