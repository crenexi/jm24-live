import { FC, ReactNode } from 'react';
import { TextPreset } from '@stypes/general.types';
import { Text } from '@components/legos';
import { Block, BlockSet } from '../index';
import sy from './Typography.scss';

// prettier-ignore
const ipsum = 'Paragraphs ALWAYS have a top margin, if not first child. Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.';
const urlGoogle = 'https://www.google.com';

const Typography: FC = () => {
  const jsxLink = <a href={urlGoogle}>there is a link</a>;

  const jsxPresetBlock = (label: string): ReactNode => {
    const preset = label.toLowerCase() as TextPreset;

    // prettier-ignore
    return (
      <Block label={label}>
        <Text className={sy.xray} preset={preset} size="lg">{label} Lg</Text>
        <Text className={sy.xray} preset={preset}>{label} Md</Text>
        <Text className={sy.xray} preset={preset} size="sm">{label} Sm</Text>
        <code>{`<Text preset="${preset}">...</Text>`}</code>
      </Block>
    );
  };

  return (
    <div className={sy.edge}>
      <div className={sy.main}>
        <BlockSet heading="Basic Elements">
          <Block label="Headings">
            <h1 className={sy.xray}>Heading One</h1>
            <h2 className={sy.xray}>Heading Two</h2>
            <h3 className={sy.xray}>Heading Three</h3>
            <h4 className={sy.xray}>Heading Four</h4>
            <h5 className={sy.xray}>Heading Five</h5>
            <h6 className={sy.xray}>Heading Six</h6>
          </Block>
          <Block label="Paragraph">
            <p>{ipsum}</p>
            {/* prettier-ignore */}
            <p>After this, {jsxLink}. Then some of the basics, like <strong>strong things</strong>, <em>em happenings</em>, and event <strong><em>both of these</em>.</strong>.Itaque earum rerum hic tenetur a sapiente delectus.</p>
            {/* prettier-ignore */}
            <p><small>Then we have small/caption text.</small></p>
          </Block>
          <Block label="Underline Mixin">
            {/* prettier-ignore */}
            <p className={sy.underlineLinks}>Here {jsxLink} except the underline is unique, utilizing the text decoration feature and disabling default. This is a better underline visual.</p>
            <code>{`.underlineLinks a { @include underline-link(); }`}</code>
          </Block>
          <Block label="Truncate Mixin">
            <p className={sy.truncate}>One line truncate. {ipsum}</p>
            <code>{`.truncate { @include truncate(); }`}</code>
          </Block>
        </BlockSet>
        <BlockSet heading="Text Presets">
          {jsxPresetBlock('Display')}
          {jsxPresetBlock('Headline')}
          {jsxPresetBlock('Title')}
          {jsxPresetBlock('Body')}
          {jsxPresetBlock('Label')}
        </BlockSet>
      </div>
    </div>
  );
};

export default Typography;
