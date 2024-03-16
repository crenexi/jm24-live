import { FC } from 'react';
import { assetsUrl } from '@constants/constants';
import sy from './WedGif.scss';

type WedGifProps = {
  isLong?: boolean;
};

const WedGif: FC<WedGifProps> = ({ isLong }) => {
  const fileName = isLong ? 'logo-long.gif' : 'logo.gif';
  const src = `${assetsUrl}/${fileName}`;

  return (
    <div className={sy.edge}>
      <img className={sy.logo} src={src} alt="Wedding logo gif" />
    </div>
  );
};

WedGif.defaultProps = {
  isLong: false,
};

export default WedGif;
