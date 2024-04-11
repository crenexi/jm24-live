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
  const handleImgMainLoad = () => setCnImages(sy.images);

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
            <img className={sy.images_img} src={imgLeft.url} />
          </div>
          <div className={sy.images_main}>
            <img
              className={sy.images_img}
              src={imgMain.url}
              onLoad={handleImgMainLoad}
            />
          </div>
          <div className={sy.images_right}>
            <img className={sy.images_img} src={imgRight.url} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalloutView;
