import { FC } from 'react';
import { assetsUrl } from '@src/shared/constants';
import { Button, ButtonCopy, ReturnHomeBlock } from '@components/action';
import { Title } from '@components/display';
import GiveAction from './GiveAction';
import sy from './Give.scss';

const Give: FC = () => {
  // prettier-ignore
  const data = {
    intro: `It's been our dream to go to London together since our first year of dating! Thank you for any contributions to our honeymoon fund. We appreciate it!`,
    urlRegistry: 'https://www.bit.ly/honeymoon-credit',
    urlVenmo: 'https://www.venmo.com/u/Michelle-Florero',
    idVenmo: 'Michelle-Florero',
    idZelle: 'james@crenexi.com',
    gifThanks: `${assetsUrl}/thanks.gif`,
  };

  return (
    <ReturnHomeBlock>
      <div className={sy.main}>
        <div className={sy.titles}>
          <Title title="Give" subtitle="To our honeymoon fund" />
          <p>
            Thanks for your gift interest! We're accepting the following ways to
            give towards our London honeymoon!
          </p>
        </div>
        <div className={sy.waysList}>
          <GiveAction icon="circle-dollar-to-slot" heading="In-Person">
            <p>Card Box near the reception entrance</p>
          </GiveAction>
          <GiveAction icon="credit-card" heading="Registry Fund">
            <p>Gift with credit/debit on our registry</p>
            <div className={sy.cta}>
              <Button
                variant="secondary"
                size="lg"
                mode="a"
                target="_blank"
                href={data.urlRegistry}
                endIcon="up-right-from-square"
              >
                Knot Registry
              </Button>
            </div>
          </GiveAction>
          <GiveAction icon="money-bill-transfer" heading="Via Zelle">
            <p>Zelle James at</p>
            <div className={sy.callout}>{data.idZelle}</div>
            <div className={sy.copy}>
              <ButtonCopy text={data.idZelle} />
              <div className={sy.copy_label}>
                Copy <strong>{data.idZelle}</strong>
              </div>
            </div>
          </GiveAction>
          <GiveAction icon="money-bill-transfer" heading="Via Venmo">
            <p>Venmo Michelle at</p>
            <div className={sy.cta}>
              <Button
                variant="secondary"
                size="lg"
                mode="a"
                target="_blank"
                href={data.urlVenmo}
                endIcon="up-right-from-square"
              >
                <strong>{data.idVenmo}</strong>
              </Button>
            </div>
            <div className={sy.copy}>
              <ButtonCopy text={data.idVenmo} />
              <div className={sy.copy_label}>
                Copy <strong>{data.idVenmo}</strong>
              </div>
            </div>
          </GiveAction>
        </div>
        <div className={sy.gif}>
          <img src={data.gifThanks} alt="Thanks gif" />
        </div>
      </div>
    </ReturnHomeBlock>
  );
};

export default Give;
