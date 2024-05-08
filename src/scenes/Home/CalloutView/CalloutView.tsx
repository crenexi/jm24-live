import { FC, useState, useEffect } from 'react';
import classNames from 'classnames';
import { Callout } from '@stypes/Callout.types';
import { Icon } from '@components/legos';
import sy from './CalloutView.scss';

type CalloutViewProps = {
  callout: Callout | null;
};

const CalloutView: FC<CalloutViewProps> = ({ callout }) => {
  if (!callout) return null;

  const { id, name, subtext, isLocation } = callout;
  const { imgMain, imgLeft, imgRight } = callout;

  const cn = classNames(sy.images, sy.images__loading);
  const [cnImages, setCnImages] = useState<string>(cn);
  const [imgsLoaded, setImgsLoaded] = useState<number>(0);

  const signalImgLoad = () => {
    setImgsLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (imgsLoaded === 3) {
      setCnImages(sy.images);
    }
  }, [imgsLoaded]);

  return (
    <div key={id} className={sy.edge}>
      <div className={sy.main}>
        <div className={sy.header}>
          <div className={sy.header_name}>{name}</div>
          <div className={sy.header_subtext}>
            {isLocation && <Icon name="location-dot" />}
            <span>{subtext}</span>
          </div>
        </div>
        <div className={cnImages}>
          <div className={sy.images_left}>
            <img
              key="leftImage"
              className={sy.images_img}
              src={imgLeft.url}
              onLoad={signalImgLoad}
            />
          </div>
          <div className={sy.images_main}>
            <img
              key="mainImage"
              className={sy.images_img}
              src={imgMain.url}
              onLoad={signalImgLoad}
            />
          </div>
          <div className={sy.images_right}>
            <img
              key="rightImage"
              className={sy.images_img}
              src={imgRight.url}
              onLoad={signalImgLoad}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalloutView;
