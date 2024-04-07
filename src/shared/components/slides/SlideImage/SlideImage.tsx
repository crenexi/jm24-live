import { FC, CSSProperties, useState, useEffect } from 'react';
import classNames from 'classnames';
import { Slide } from '@stypes/Slide.types';
import sy from './SlideImage.scss';

type SlideImageProps = {
  slide: Slide;
  fadeOnLoad?: boolean;
  sx?: CSSProperties;
};

const SlideImage: FC<SlideImageProps> = (props) => {
  const { slide, fadeOnLoad = false, sx = {} } = props;

  const cn = !fadeOnLoad ? sy.img : classNames(sy.img, sy.img__loading);
  const [cnImg, setCnImage] = useState<string>(cn);

  useEffect(() => {
    if (fadeOnLoad) setCnImage(classNames(sy.img, sy.img__loading));
  }, [slide.id]);

  const handleImageLoad = () => {
    if (fadeOnLoad) setCnImage(sy.img);
  };

  return (
    <div className={sy.imageBox}>
      <div className={sy.imageBox_canvas}>
        <img
          key={slide.id}
          className={cnImg}
          src={slide.url}
          alt={slide.description}
          onLoad={handleImageLoad}
          style={sx}
        />
      </div>
    </div>
  );
};

export default SlideImage;
