import { FC } from 'react';
import { Overline } from '@components/display';
import { ButtonIcon } from '@components/action';
import SlideControl from './SlideControl';
import SlideDeck from './SlideDeck';
import sy from './SlidesView.scss';

type SlidesViewProps = {
  isReady: boolean;
  hasControl: boolean;
  toggleControl: () => void;
};

const SlidesView: FC<SlidesViewProps> = (props) => {
  const { isReady, hasControl, toggleControl } = props;

  // Loading
  if (!isReady) return null;

  return (
    <div className={sy.edge}>
      <div className={sy.main}>
        <div className={sy.aside}>
          <Overline icon="house-building" />
        </div>
        <SlideDeck />
        <div className={sy.aside}>
          <Overline icon="trees" />
        </div>
        <div className={sy.controlToggle}>
          <ButtonIcon name="code" click={toggleControl} />
        </div>
        {hasControl && (
          <div className={sy.controlFrame}>
            <SlideControl onClose={toggleControl} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SlidesView;
