import { FC, useState, useEffect } from 'react';
import copyService from '@services/copy-service';
import { ButtonIcon } from '@components/action';
import { ButtonVariant } from '@stypes/general.types';
import sy from './ButtonCopy.scss';

type ButtonDefaults = {
  iconName: string;
  variant: ButtonVariant;
};

type ButtonCopyProps = {
  text: string;
  onCopy?: () => void;
};

const ButtonCopy: FC<ButtonCopyProps> = ({ text, onCopy = () => {} }) => {
  const defaults: ButtonDefaults = {
    iconName: 'clipboard',
    variant: 'secondary',
  };

  const [iconName, setIconName] = useState(defaults.iconName);
  const [variant, setVariant] = useState(defaults.variant);
  const [copied, setCopied] = useState(false);

  const toastSuccess = () => {
    setVariant('success');
    setIconName('clipboard-check');
    setCopied(true);
    onCopy();
  };

  const toastClear = () => {
    setIconName(defaults.iconName);
    setVariant(defaults.variant);
    setCopied(false);
  };

  const click = () => copyService.copy(text).then(toastSuccess);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(toastClear, 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const Label = (
    <div className={sy.label}>
      <div className={sy.label_main}>Copied!</div>
    </div>
  );

  return (
    <div className={sy.edge}>
      <ButtonIcon
        classes={{ root: 'button-copy' }}
        name={iconName}
        variant={variant}
        click={click}
      />
      {copied && Label}
    </div>
  );
};

export default ButtonCopy;
