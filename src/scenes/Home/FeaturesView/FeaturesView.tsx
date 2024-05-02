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
  srcQuery: string;
};

const FeaturesView: FC<FeaturesViewProps> = (props) => {
  const album = Album.FEATURES;

  const { slide, timeAgo, index, total, interval, srcQuery } = props;
  const { isPlaying, isVertical, isFetching } = props;
  const counts = `${index} / ${total}`;

  const sxImage: CSSProperties = {
    objectFit: isVertical ? 'contain' : 'cover',
  };

  const [cnImg, setCnImage] = useState<string>(
    classNames(sy.img, sy.img__loading),
  );
  const handleImageLoad = () => setCnImage(sy.img);

  useEffect(() => {
    // Additional safeguard for cached images
    const imgElement = document.querySelector(
      `img[src="${slide.url}"]`,
    ) as HTMLImageElement;
    if (imgElement && imgElement.complete) {
      handleImageLoad();
    }
  }, [slide.url]);

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
            src={`${slide.url}=${srcQuery}`}
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
