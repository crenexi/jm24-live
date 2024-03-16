import { FC } from 'react';
import { Button, ButtonIcon } from '@components/action';
import { ButtonSize, ButtonVariant } from '@stypes/general.types';
import { Block, BlockSet } from '../../index';
import sy from './KitButtonsEssentials.scss';

const buttonSizes: ButtonSize[] = ['sm', 'md', 'lg'];
const buttonVariants: ButtonVariant[] = ['default', 'primary', 'secondary', 'text', 'ghost', 'danger', 'success']; // prettier-ignore

const KitButtonsEssentials: FC = () => (
  <div className={sy.edge}>
    <BlockSet heading="Button Defaults">
      <Block label="Button">
        <Button>Button</Button>
      </Block>
      <Block label="Button - Disabled">
        <Button disabled>Button</Button>
      </Block>
    </BlockSet>
    <BlockSet heading="Button Variants">
      <Block label="Button > Primary">
        <Button variant="primary">Button</Button>
        <code>{`variant="primary"`}</code>
      </Block>
      <Block label="Button > Secondary">
        <Button variant="secondary">Button</Button>
        <code>{`variant="secondary"`}</code>
      </Block>
      <Block label="Button > Text">
        <Button variant="text">Button</Button>
        <code>{`variant="text"`}</code>
      </Block>
      <Block label="Button > Ghost">
        <Button variant="ghost">Button</Button>
        <code>{`variant="ghost"`}</code>
      </Block>
      <Block label="Button > White" isDark>
        <Button variant="white">Button</Button>
        <code>{`variant="white"`}</code>
      </Block>
      <Block label="Button > Danger">
        <Button variant="danger">Button</Button>
        <code>{`variant="danger"`}</code>
      </Block>
      <Block label="Button > Success">
        <Button variant="success">Button</Button>
        <code>{`variant="success"`}</code>
      </Block>
    </BlockSet>
    <BlockSet heading="Button Sizes">
      <Block label="Button > Small">
        <Button mode="mock" size="sm">
          Button
        </Button>
        <code>{`size="sm"`}</code>
      </Block>
      <Block label="Button > Medium">
        <Button mode="mock" size="md">
          Button
        </Button>
        <code>{`size="md" (default)`}</code>
      </Block>
      <Block label="Button > Large">
        <Button mode="mock" size="lg">
          Button
        </Button>
        <code>{`size="lg"`}</code>
      </Block>
    </BlockSet>
    <BlockSet heading="Button Modes">
      <Block label="Button > Action">
        <Button>Button</Button>
        <code>{`mode="action" (default)`}</code>
      </Block>
      <Block label="Button > Link">
        <Button mode="link" to="/">
          Button
        </Button>
        <code>{`mode="link" to="/"`}</code>
      </Block>
      <Block label="Button > NavLink">
        <Button mode="navLink" to="/">
          Button
        </Button>
        <code>{`mode="navLink" to="/" sxActive={styles}`}</code>
      </Block>
      <Block label="Button > Anchor">
        <Button mode="a" href="/">
          Button
        </Button>
        <code>{`mode="a" href="/"`}</code>
      </Block>
      <Block label="Button > Mock">
        <Button mode="mock" to="/">
          Button
        </Button>
        <code>{`mode="mock"`}</code>
      </Block>
    </BlockSet>
    <BlockSet heading="Icon Button">
      <Block label="Icon Button Variants">
        <div style={{ display: 'flex' }}>
          {buttonVariants.map((variant) => (
            <div key={variant} style={{ padding: '.5rem' }}>
              <ButtonIcon name="yin-yang" variant={variant} />
            </div>
          ))}
        </div>
      </Block>
      <Block label="Icon Button Sizes" isDark>
        <div style={{ display: 'flex' }}>
          {buttonSizes.map((size) => (
            <div key={size} style={{ padding: '.5rem' }}>
              <ButtonIcon name="yin-yang" variant="white" size={size} />
            </div>
          ))}
        </div>
      </Block>
    </BlockSet>
  </div>
);

export default KitButtonsEssentials;
