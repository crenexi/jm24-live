import { FC, CSSProperties, useState, useEffect } from 'react';
import classNames from 'classnames';
import { Slide } from '@stypes/Slide.types';
import sy from './SlideImage.scss';

type SlideImageProps = {
  slide: Slide;
  srcQuery: string;
  fadeOnLoad?: boolean;
  sx?: CSSProperties;
};

const SlideImage: FC<SlideImageProps> = (props) => {
  const { slide, srcQuery, fadeOnLoad = false, sx = {} } = props;

  const [cnImg, setCnImage] = useState<string>(() =>
    fadeOnLoad ? classNames(sy.img, sy.img__loading) : sy.img,
  );

  const handleImageLoad = () => {
    setCnImage(sy.img);
  };

  useEffect(() => {
    // Additional safeguard for cached images
    const imgElement = document.querySelector(
      `img[src="${slide.url}=${srcQuery}"]`,
    ) as HTMLImageElement;
    if (imgElement && imgElement.complete) {
      handleImageLoad();
    }
  }, [slide.url]);

  return (
    <div className={sy.imageBox}>
      <div className={sy.imageBox_canvas}>
        <img
          key={slide.id}
          className={cnImg}
          src={`${slide.url}=${srcQuery}`}
          alt={slide.description}
          onLoad={handleImageLoad}
          style={sx}
        />
      </div>
    </div>
  );
};

export default SlideImage;
