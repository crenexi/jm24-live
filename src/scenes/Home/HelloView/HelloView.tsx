import { FC } from 'react';
import useDataStatic from '@hooks/use-data-static';
import HelloQuote from './HelloQuote';
import NewsReel from './NewsReel';
import sy from './HelloView.scss';

const HelloView: FC = () => {
  const dStatic = useDataStatic();
  const urlLogo = dStatic.urlLogoGIF;

  return (
    <div className={sy.edge}>
      <div className={sy.main}>
        <div className={sy.welcome}>
          <div className={sy.welcome_nameFirst}>Michelle</div>
          <div className={sy.welcome_nameLast}>Florero</div>
          <div className={sy.welcome_amp}>&amp;</div>
          <div className={sy.welcome_nameFirst}>James</div>
          <div className={sy.welcome_nameLast}>Blume</div>
        </div>
        <div className={sy.brand}>
          <img src={urlLogo} alt="Logo GIF" />
        </div>
        <div className={sy.quotes}>
          <div className={sy.thanks}>
            <div className={sy.thanks_title}>Thanks</div>
            <div className={sy.thanks_subtext}>for joining us!</div>
          </div>
          <HelloQuote />
        </div>
        <div className={sy.reel}>
          <NewsReel />
        </div>
      </div>
    </div>
  );
};

export default HelloView;
