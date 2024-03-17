import { FC, ReactNode } from 'react';
import sy from './SlidesView.scss';

type SlidesViewProps = {
  isReady: boolean;
};

const SlidesView: FC<SlidesViewProps> = (props) => {
  const { isReady } = props;

  // Loading
  if (!isReady) return null;

  return (
    <div className={sy.edge}>
      <div className={sy.main}>Slides View</div>
    </div>
  );
};

export default SlidesView;
