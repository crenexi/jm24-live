import { FC, useState, useRef, useEffect } from 'react';
import sy from './StorySubtext.scss';

const SUBTEXT_SPEED = 100;

type StorySubtextProps = {
  children: string;
};

const StorySubtext: FC<StorySubtextProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState('0s');

  const sxSubtext = {
    animationDuration: duration,
  };

  useEffect(() => {
    if (ref.current) {
      const subtextWidth = ref.current.offsetWidth || 0;
      const parentWidth = ref.current.parentElement?.offsetWidth || 0;
      const totalWidth = subtextWidth + parentWidth;
      const speed = SUBTEXT_SPEED; // pixels per second
      const duration = totalWidth / speed;

      setDuration(`${duration}s`);
    }
  }, [children]);

  return (
    <div className={sy.subtext} ref={ref} style={sxSubtext}>
      {children}
    </div>
  );
};

export default StorySubtext;
