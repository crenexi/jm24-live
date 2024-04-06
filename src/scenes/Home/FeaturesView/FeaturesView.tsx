import { FC, CSSProperties, useState, useEffect } from 'react';
import classNames from 'classnames';
import { Album, Slide } from '@stypes/Slide.types';
import { SlideProgress, SlideFrame } from '@components/slides';
import sy from './FeaturesView.scss';

export type FeaturesViewProps = {
  slide: Slide;
  timeAgo: string;
  index: number;
  total: number;
  interval: number;
  isPlaying: boolean;
  isFetching: boolean;
  isVertical: boolean;
};

const FeaturesView: FC<FeaturesViewProps> = (props) => {
  const album = Album.FEATURES;

  const { slide, timeAgo, index, total, interval } = props;
  const { isPlaying, isVertical, isFetching } = props;
  const counts = `${index} / ${total}`;

  const sxImage: CSSProperties = {
    objectFit: isVertical ? 'contain' : 'cover',
  };

  const [cnImg, setCnImage] = useState<string>(sy.img);
  useEffect(() => setCnImage(sy.img), [slide.id]);

  const handleImageLoad = () => {
    setCnImage(classNames(sy.img, sy.img__loaded));
  };

  return (
    <SlideFrame
      album={album}
      counts={counts}
      isFetching={isFetching}
      isPlaying={isPlaying}
      header={<div className={sy.headerDesc}>{slide.description}</div>}
    >
      <div className={sy.imageBox}>
        <div className={sy.imageBox_canvas}>
          <img
            key={slide.id}
            className={cnImg}
            src={slide.url}
            alt={slide.description}
            onLoad={handleImageLoad}
            style={sxImage}
          />
          {isPlaying && <SlideProgress index={index} duration={interval} />}
          <div className={sy.image_gap} />
          <div className={sy.image_date}>{timeAgo}</div>
        </div>
      </div>
    </SlideFrame>
  );
};

export default FeaturesView;
