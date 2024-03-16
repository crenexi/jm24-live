import { FC } from 'react';
import sy from './CULogo.scss';

const CULogo: FC = () => {
  const urlBrandAssets = 'https://www.crenexi.com/assets/brand';
  const urlCULogo = `${urlBrandAssets}/cu-logo-main.svg`;
  const alt = 'Crenexi Utilities Logo';

  return (
    <div className={sy.edge}>
      <img className={sy.img} src={urlCULogo} alt={alt} />
    </div>
  );
};

export default CULogo;
