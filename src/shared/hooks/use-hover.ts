import { useState, useCallback, useRef, MutableRefObject } from 'react';

type UseHoverReturn = [
  MutableRefObject<null>,
  boolean,
  {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  },
];

const useHover = (): UseHoverReturn => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const hoverProps = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  return [ref, isHovered, hoverProps];
};

export default useHover;
