import { FC, CSSProperties, useState, useEffect } from 'react';
import classNames from 'classnames';
import { Album, Slide } from '@stypes/Slide.types';
import { SlideProgress, SlideControl } from '@components/slides';
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

  const [cnImg, setCnImage] = useState<string>(sy.image);
  useEffect(() => setCnImage(sy.image), [slide.id]);

  const handleImageLoad = () => {
    setCnImage(classNames(sy.image, sy.image__loaded));
  };

  return (
    <div className={sy.edge}>
      <div className={sy.header}>
        <div className={sy.header_desc}>{slide.description}</div>
      </div>
      <div className={sy.main}>
        <img
          key={slide.id}
          className={cnImg}
          src={slide.url}
          alt={slide.description}
          onLoad={handleImageLoad}
          style={sxImage}
        />
        <div className={sy.main_inner}>
          <div className={sy.image_gap} />
          <div className={sy.image_date}>{timeAgo}</div>
          {isPlaying ? (
            <SlideProgress slideId={slide.id} duration={interval} />
          ) : (
            <SlideControl album={album} />
          )}
        </div>
      </div>
      <div className={sy.footer}>
        <div className={sy.footer_counts}>{counts}</div>
        <div className={sy.footer_center} />
        <div className={sy.footer_status}>{isFetching && 'UPDATING..'}</div>
      </div>
    </div>
  );
};

export default FeaturesView;
