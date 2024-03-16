import { FC } from 'react';
import { assetsUrl } from '@constants/constants';
import sy from './Alpacas.scss';

const Alpacas: FC = () => {
  const urlAlpaca = `${assetsUrl}/alpaca.svg`;

  return (
    <div className={sy.edge}>
      <div className={sy.main}>
        <div className={sy.fade} />
        <div className={sy.field} />
        <img className={sy.alpaca} src={urlAlpaca} />
      </div>
    </div>
  );
};

export default Alpacas;
