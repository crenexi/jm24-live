import { FC } from 'react';
import { Album, Slide } from '@stypes/Slide.types';
import { SlideProgress, SlideFrame, SlideImage } from '@components/slides';
import sy from './StandardsView.scss';

type StandardsViewProps = {
  slides: Slide[];
  index: number;
  total: number;
  interval: number;
  isPlaying: boolean;
  isFetching: boolean;
};

const StandardsView: FC<StandardsViewProps> = (props) => {
  const album = Album.STANDARDS;

  const { slides, index, total, interval, isPlaying, isFetching } = props;
  const counts = `${index} / ${total}`;

  return (
    <SlideFrame
      album={album}
      counts={counts}
      isFetching={isFetching}
      isPlaying={isPlaying}
      header={
        <div className={sy.header}>
          {isPlaying && <SlideProgress index={index} duration={interval} />}
        </div>
      }
    >
      <div className={sy.grid}>
        {slides.map((slide) => (
          <div key={slide.id} className={sy.grid_item}>
            <SlideImage slide={slide} />
          </div>
        ))}
      </div>
    </SlideFrame>
  );
};

export default StandardsView;
