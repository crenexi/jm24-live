import { FC } from 'react';
import dStatic from '@config/data-static';
import { assetsUrl } from '@src/shared/constants';
import { Overline } from '@components/display';
import WishList from './WishList';
import sy from './WishesView.scss';

const WishesView: FC = (props) => {
  const { urlCoverBranches } = dStatic;
  const urlQR = `${assetsUrl}/qr-code_go-jm2024-com.png`;

  const sxEdge = {
    backgroundImage: `url('${urlCoverBranches}')`,
  };

  return (
    <div className={sy.edge} style={sxEdge}>
      <div className={sy.aside}>
        <Overline label="Wishes" icon="comment-lines" />
        <WishList />
      </div>
      <div className={sy.main}>
        <div className={sy.main_top} />
        <div className={sy.main_bottom}>
          <div className={sy.qr}>
            <img src={urlQR} alt="QR Code" />
            <span>go.jm2024.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishesView;
