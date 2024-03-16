import { FC } from 'react';
import { ButtonBase, ButtonBack, ButtonCopy } from '@components/action';
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
      <BlockSet heading="Action Buttons">
        <Block label="Back Button">
          <ButtonBack>Back</ButtonBack>
          <code>{`<ButtonBack />`}</code>
        </Block>
        <Block label="Copy Button">
          <ButtonCopy text="Alpacas in Montana" />
          <code>{`<ButtonCopy text={text} onCopy={func} />`}</code>
        </Block>
      </BlockSet>
    </div>
  );
};

export default KitButtonsSpecial;
