import { FC } from 'react';
import { Album } from '@stypes/Slide.types';
import useSlides from '@hooks/use-slides';
import { ButtonIcon } from '@components/action';
import sy from './SlideControl.scss';

type SlideControlProps = {
  album: Album;
  onClose: () => void;
};

const SlideControl: FC<SlideControlProps> = ({ album, onClose }) => {
  const { status, deck, actions } = useSlides();
  const albumDeck = deck[album];

  const errText = status.error?.message || 'NULL';
  const isFetching = String(status.isFetching);
  const isLoading = String(status.isLoading);
  const prevDesc = albumDeck.prev?.description || 'NULL';
  const currDesc = albumDeck.curr?.description || 'NULL';
  const nextDesc = albumDeck.next?.description || 'NULL';

  return (
    <div className={sy.edge}>
      <div className={sy.header}>
        <div className={sy.header_nav}>
          <ButtonIcon
            variant="secondary"
            name="backward-step"
            click={() => actions.toPrev({ album })}
          />
          <ButtonIcon
            variant="secondary"
            name="forward-step"
            click={() => actions.toNext({ album })}
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
        </div>
        <h6>Deck</h6>
        <div className={sy.info_deck}>
          <div className={sy.info_item}>currIndex: {albumDeck.currIndex}</div>
          <div className={sy.info_item}>prev: {prevDesc}</div>
          <div className={sy.info_item}>curr: {currDesc}</div>
          <div className={sy.info_item}>next: {nextDesc}</div>
        </div>
      </div>
    </div>
  );
};

export default SlideControl;
