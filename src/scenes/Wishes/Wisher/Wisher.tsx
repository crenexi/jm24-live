import { FC, Fragment } from 'react';
import { Button } from '@components/action';
import { useWisher } from './WisherContext';
import WisherForm from './WisherForm';
import SendButton from './SendButton';
import SuccessMessage from './SuccessMessage';
import sy from './Wisher.scss';

const Wisher: FC = () => {
  const { error, state, reset } = useWisher();

  const jsxMain = (() => {
    if (error) {
      return (
        <div className={sy.error}>
          <h6>Something Went Wrong..</h6>
          <div className={sy.error_message}>{error.message}</div>
          <div className={sy.error_reset}>
            <Button click={reset}>Try Again</Button>
          </div>
        </div>
      );
    }

    if (state.isSuccess) {
      return <SuccessMessage />;
    }

    return (
      <Fragment>
        <WisherForm />
        <SendButton />
      </Fragment>
    );
  })();

  return (
    <div className={sy.edge}>
      <div className={sy.title}>Send Wish</div>
      {jsxMain}
    </div>
  );
};

export default Wisher;
