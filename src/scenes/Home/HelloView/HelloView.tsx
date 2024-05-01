import { FC } from 'react';
import useDataStatic from '@hooks/use-data-static';
import HelloQuote from './HelloQuote';
import sy from './HelloView.scss';

const HelloView: FC = () => {
  const dStatic = useDataStatic();
  const urlLogo = dStatic.urlLogoGIF;

  return (
    <div className={sy.edge}>
      <div className={sy.brand}>
        <img src={urlLogo} alt="Logo GIF" />
      </div>
      <div className={sy.quotes}>
        <HelloQuote />
      </div>
    </div>
  );
};

export default HelloView;
