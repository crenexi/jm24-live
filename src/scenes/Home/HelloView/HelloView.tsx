import { FC } from 'react';
import useDataStatic from '@hooks/use-data-static';
import NewsReel from './NewsReel';
import sy from './HelloView.scss';

const HelloView: FC = () => {
  const dStatic = useDataStatic();
  const urlLogo = dStatic.urlLogoGIF;

  return (
    <div className={sy.edge}>
      <div className={sy.main}>
        <div className={sy.left}>Left</div>
        <div className={sy.brand}>
          <img src={urlLogo} alt="Logo GIF" />
        </div>
        <div className={sy.right}>Right</div>
        <div className={sy.reel}>
          <NewsReel />
        </div>
      </div>
    </div>
  );
};

export default HelloView;
