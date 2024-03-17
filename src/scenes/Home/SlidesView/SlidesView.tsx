import { FC, ReactNode } from 'react';
import sy from './SlidesView.scss';

type SlidesViewProps = {
  children?: ReactNode;
  isReady: boolean;
};

const SlidesView: FC<SlidesViewProps> = (props) => {
  const { children = 'TODO', isReady } = props;

  // Loading
  if (!isReady) return null;

  return (
    <div className={sy.edge}>
      <div className={sy.main}>{children}</div>
    </div>
  );
};

export default SlidesView;
