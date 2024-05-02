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
  srcQuery: string;
};

const StandardsView: FC<StandardsViewProps> = (props) => {
  const album = Album.STANDARDS;

  const { slides, index, total, interval, srcQuery } = props;
  const { isPlaying, isFetching } = props;
  const counts = `${index} / ${total}`;

  return (
    <SlideFrame
      album={album}
      counts={counts}
      isFetching={isFetching}
      isPlaying={isPlaying}
    >
      <div className={sy.progress}>
        {isPlaying && <SlideProgress index={index} duration={interval} />}
      </div>
      <div className={sy.grid}>
        {slides.map((slide) => (
          <div key={slide.id} className={sy.grid_item}>
            <SlideImage slide={slide} srcQuery={srcQuery} fadeOnLoad />
          </div>
        ))}
      </div>
    </SlideFrame>
  );
};

export default StandardsView;
