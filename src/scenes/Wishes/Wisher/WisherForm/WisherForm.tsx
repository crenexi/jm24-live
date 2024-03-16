import { FC, ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import { useWisher } from '../WisherContext';
import sy from './WisherForm.scss';

const WisherForm: FC = () => {
  const helpText = 'Add your wishes/advice for M&J';

  const { state, handleChange } = useWisher();

  const handleSenderChange = (ev: ChangeEvent<HTMLInputElement>) => {
    handleChange('sender', ev.target.value);
  };

  const handleMessageChange = (ev: ChangeEvent<HTMLInputElement>) => {
    handleChange('message', ev.target.value);
  };

  return (
    <div className={sy.form}>
      <div className={sy.form_field}>
        <TextField
          id="sender"
          variant="filled"
          label="Your Name"
          fullWidth
          disabled={state.isSending}
          value={state.wish.sender}
          onChange={handleSenderChange}
        />
      </div>
      <div className={sy.form_field}>
        <TextField
          id="message"
          variant="filled"
          label="Message"
          helperText={helpText}
          minRows={5}
          multiline
          fullWidth
          disabled={state.isSending}
          value={state.wish.message}
          onChange={handleMessageChange}
        />
      </div>
    </div>
  );
};

export default WisherForm;
