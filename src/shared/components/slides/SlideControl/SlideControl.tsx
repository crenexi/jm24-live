import { FC } from 'react';
import { Mode } from '@stypes/Slide.types';
import useSlides from '@hooks/use-slides';
import { ButtonIcon } from '@components/action';
import sy from './SlideControl.scss';

type SlideControlProps = {
  onClose: () => void;
};

const SlideControl: FC<SlideControlProps> = ({ onClose }) => {
  const { error, status, deck, actions } = useSlides();

  const handleToggleMode = () => {
    actions.setMode(status.isPlaying ? 'pause' : 'play');
  };

  const modeIcon: Mode = status.isPlaying ? 'pause' : 'play';
  const errText = error?.message || 'NULL';
  const isFetching = String(status.isFetching);
  const isLoading = String(status.isLoading);
  const isPlaying = String(status.isPlaying);
  const prevDesc = deck.prev?.description || 'NULL';
  const currDesc = deck.curr?.description || 'NULL';
  const nextDesc = deck.next?.description || 'NULL';

  return (
    <div className={sy.edge}>
      <div className={sy.header}>
        <div className={sy.header_nav}>
          <ButtonIcon
            variant="primary"
            name={modeIcon}
            click={handleToggleMode}
          />
          <ButtonIcon
            variant="secondary"
            name="backward-step"
            click={actions.toPrev}
          />
          <ButtonIcon
            variant="secondary"
            name="forward-step"
            click={actions.toNext}
          />
          <ButtonIcon
            variant="secondary"
            name="rotate-left"
            click={actions.restart}
          />
        </div>
        <div className={sy.header_close}>
          <ButtonIcon name="times" click={onClose} />
        </div>
      </div>
      <div className={sy.info}>
        <h6>Error</h6>
        <div className={sy.info_error}>
          <div className={sy.info_item}>Error: {errText}</div>
        </div>
        <h6>Status</h6>
        <div className={sy.info_status}>
          <div className={sy.info_item}>isFetching: {isFetching}</div>
          <div className={sy.info_item}>isLoading: {isLoading}</div>
          <div className={sy.info_item}>isPlaying: {isPlaying}</div>
        </div>
        <h6>Deck</h6>
        <div className={sy.info_deck}>
          <div className={sy.info_item}>currIndex: {deck.currIndex}</div>
          <div className={sy.info_item}>prev: {prevDesc}</div>
          <div className={sy.info_item}>curr: {currDesc}</div>
          <div className={sy.info_item}>next: {nextDesc}</div>
        </div>
      </div>
    </div>
  );
};

export default SlideControl;
