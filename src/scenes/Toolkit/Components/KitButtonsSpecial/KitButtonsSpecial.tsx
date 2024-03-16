import { FC } from 'react';
import { ButtonBase } from '@components/action';
import { Block, BlockSet } from '../../index';
import sy from './KitButtonsSpecial.scss';

const KitButtonsSpecial: FC = () => {
  const urlTest = '/toolkit/components/buttons1';

  return (
    <div className={sy.edge}>
      <BlockSet heading="Extendable">
        <Block label="Base Button">
          <ButtonBase mode="link" to={urlTest}>
            Essential Buttons
          </ButtonBase>
          <code>{`<ButtonBase mode="link" to={url}`}</code>
        </Block>
      </BlockSet>
      <BlockSet heading="Action Buttons">Nothing Here</BlockSet>
    </div>
  );
};

export default KitButtonsSpecial;
