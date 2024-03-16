import { FC } from 'react';
import { assetsUrl } from '@src/shared/constants';
import { Icon } from '@components/legos';
import { ReturnHomeBlock } from '@components/action';
import { Title } from '@components/display';
import Wisher from './Wisher';
import WishList from './WishList';
import sy from './Wishes.scss';

const Wishes: FC = () => {
  const gifCheers = `${assetsUrl}/cheers.gif`;

  return (
    <ReturnHomeBlock>
      <div className={sy.header}>
        <div className={sy.header_icon}>
          <Icon name="wand-sparkles" />
        </div>
        <Title title="Send" subtitle="us a wish or advice!" />
        <div className={sy.gif}>
          <img src={gifCheers} alt="Cheers gif" />
        </div>
        <div className={sy.header_invite}>
          <Icon name="chevrons-down" />
        </div>
      </div>
      <div className={sy.main}>
        <Wisher />
        <WishList />
      </div>
    </ReturnHomeBlock>
  );
};

export default Wishes;
