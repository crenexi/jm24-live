import { FC, ReactNode } from 'react';
import appTheme from '@config/app-theme';
import logger from '@services/logger';
import { capitalize } from '@helpers/index';
import { PaletteRows } from '@stypes/app-theme.types';
import { ButtonCopy } from '@components/action';
import { Block, BlockSet } from '../index';
import sy from './Palette.scss';

type CoCodeFn = (title: string, colors: [string, string][]) => string;
type JsxBlockSetFn = (heading: string, set: PaletteRows) => ReactNode;

const Palette: FC = () => {
  const palette = appTheme.paletteRows;
  const mains = ['primary', 'bright', 'accent'];
  const neutrals = ['content', 'background', 'neutrals'];
  const utility = ['info', 'warn', 'danger', 'success'];

  const setMains = palette.filter(({ title }) => mains.includes(title));
  const setNeutrals = palette.filter(({ title }) => neutrals.includes(title));
  const setUtility = palette.filter(({ title }) => utility.includes(title));

  const coCode: CoCodeFn = (title, colors) => {
    try {
      const firstLabel = colors[0][0]?.toLowerCase();
      return `co(${title}, ${firstLabel})`;
    } catch (error) {
      logger.error('Error in coCode function:', error);
      return '';
    }
  };

  // Helper
  const jsxBlockSet: JsxBlockSetFn = (heading, set) => (
    <BlockSet heading={heading}>
      {set.map(({ title, colors }) => (
        <Block key={title} label={capitalize(title)}>
          <div className={sy.colors}>
            {colors.map(([label, value]) => (
              <div key={label} className={sy.color}>
                <div
                  className={sy.color_box}
                  style={{ backgroundColor: value }}
                >
                  <div className={sy.color_copy}>
                    <ButtonCopy text={value} />
                  </div>
                </div>
                <div className={sy.color_label}>{label}</div>
              </div>
            ))}
          </div>
          <code>{coCode(title, colors)}</code>
        </Block>
      ))}
    </BlockSet>
  );

  return (
    <div className={sy.edge}>
      <div className={sy.main}>
        {jsxBlockSet('Mains', setMains)}
        {jsxBlockSet('Neutrals', setNeutrals)}
        {jsxBlockSet('Utility', setUtility)}
      </div>
    </div>
  );
};

export default Palette;
