import { FC } from 'react';
import svars from '@sutils/exports.scss';
import { Block, BlockSet } from '../index';
import sy from './SCSS.scss';

const SCSS: FC = () => {
  const spItems = ['sm', 'md', 'lg'].flatMap((prefix) => {
    return Array.from({ length: 7 }, (_, i) => `${prefix}${i + 1}`);
  });

  return (
    <div className={sy.edge}>
      <div className={sy.main}>
        <BlockSet heading="Spacing">
          <Block label="Spacing Variables">
            <div className={sy.spItems}>
              {spItems.map((item) => (
                <div key={item} className={sy.spItem}>
                  <div className={sy.spItem_label}>{item}</div>
                  <div
                    className={sy.spItem_bar}
                    style={{ width: svars[`sp_${item}`] }}
                  />
                </div>
              ))}
            </div>
            <code>padding: sp(sm1) sp(md5) sp(lg7)</code>
          </Block>
        </BlockSet>
      </div>
    </div>
  );
};

export default SCSS;
