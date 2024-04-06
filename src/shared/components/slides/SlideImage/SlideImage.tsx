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

  const [cnImg, setCnImage] = useState<string>(sy.img);

  useEffect(() => {
    if (fadeOnLoad) setCnImage(sy.img);
  }, [slide.id]);

  const handleImageLoad = () => {
    setCnImage(classNames(sy.img, sy.img__loaded));
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
