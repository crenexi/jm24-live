import { FC, CSSProperties, useState, useEffect } from 'react';
import classNames from 'classnames';
import { Album, Slide } from '@stypes/Slide.types';
import { SlideProgress, SlideControl, SlideFrame } from '@components/slides';
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
      header={<div>HEADER</div>}
    >
      <div className={sy.grid}>
        {slides.map((slide) => (
          <div className={sy.grid_item}>{slide.id}</div>
        ))}
      </div>
    </SlideFrame>
  );
};

export default StandardsView;
