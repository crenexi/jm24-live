import { FC, ReactNode, Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollToTopProps = {
  children: ReactNode;
};

const ScrollToTop: FC<ScrollToTopProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  /* eslint-disable react/jsx-no-useless-fragment */
  return <Fragment>{children}</Fragment>;
};

export default ScrollToTop;
