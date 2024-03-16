import { FC, Fragment } from 'react';
import { Button } from '@components/action';
import { assetsUrl } from '@src/shared/constants';
import { useWisher } from '../WisherContext';
import sy from './SuccessMessage.scss';

const SuccessMessage: FC = () => {
  const urlGif = `${assetsUrl}/rogan.gif`;

  const { reset } = useWisher();

  return (
    <Fragment>
      <div className={sy.edge}>
        <h5>Wish Sent!</h5>
        <div className={sy.reset}>
          <Button
            variant="white"
            startIcon="message-heart"
            click={reset}
            size="lg"
          >
            Write Another
          </Button>
        </div>
      </div>
      <div className={sy.gif}>
        <img src={urlGif} alt="Success gif" />
      </div>
    </Fragment>
  );
};

export default SuccessMessage;
