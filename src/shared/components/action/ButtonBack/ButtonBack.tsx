import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { To } from '@stypes/general.types';
import Button, { ButtonProps } from '../Button';

interface ButtonBackProps extends ButtonProps {
  backTo?: To;
}

const ButtonBack: FC<ButtonBackProps> = ({ backTo, children, ...props }) => {
  const navigate = useNavigate();
  const mode = backTo ? 'link' : 'mock';
  const to = backTo || '';
  const click = backTo ? undefined : () => navigate(-1);

  return (
    <Button mode={mode} to={to} startIcon="arrow-left" click={click} {...props}>
      {children}
    </Button>
  );
};

export default ButtonBack;
