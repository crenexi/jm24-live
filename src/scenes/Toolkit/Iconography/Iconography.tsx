import { Icon } from '@components/legos';
import appTheme from '@config/app-theme';
import { Block, BlockSet } from '../index';
import sy from './Iconography.scss';

const Iconography = () => {
  const iconRows = appTheme.iconRows;

  return (
    <div className={sy.edge}>
      <div className={sy.main}>
        {iconRows.map(({ title, icons }) => (
          <BlockSet key={title} heading={title}>
            <Block label={title}>
              <div className={sy.icons}>
                {icons.map(([iconName, prefix]) => (
                  <div key={iconName} className={sy.icon}>
                    <Icon name={iconName} prefix={prefix} />
                    <div className={sy.icon_name}>{iconName}</div>
                    <div className={sy.icon_nameFull}>{iconName}</div>
                  </div>
                ))}
              </div>
            </Block>
          </BlockSet>
        ))}
      </div>
    </div>
  );
};

export default Iconography;
