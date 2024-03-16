import { FC } from 'react';
import { Icon } from '@components/legos';
import { Button } from '@components/action';
import { Loading } from '@components/feedback';
import { useWisher } from '../WisherContext';
import sy from './SendButton.scss';

const SendButton: FC = () => {
  const { state, handleSend } = useWisher();
  const disabled = !state.isValid || state.isSending;

  return (
    <div className={sy.edge}>
      <Button
        variant="primary"
        size="lg"
        click={handleSend}
        disabled={disabled}
      >
        <span>SEND</span>
        <span style={{ marginLeft: '7px' }}>
          {state.isSending ? (
            <Loading iconName="spinner-third" size="sm" />
          ) : (
            <Icon name="paper-plane-top" size="lg" />
          )}
        </span>
      </Button>
    </div>
  );
};

export default SendButton;
