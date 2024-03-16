import { FC } from 'react';
import { Button } from '@components/action';
import { Icon } from '@components/legos';
import DataStatic from '@stypes/data-static.types';
import classNames from 'classnames';
import sy from './WedActions.scss';

interface WedActionsProps {
  isReady: boolean;
  dStatic: DataStatic;
}

const WedActions: FC<WedActionsProps> = (props) => {
  const { isReady, dStatic } = props;

  // Loading
  if (!isReady) return null;

  const cnItemMain = (disabled: boolean) =>
    !disabled ? sy.item_main : classNames(sy.item_main, sy.item_main__disabled);

  return (
    <div className={sy.list}>
      {dStatic.wedActions?.map((item) => (
        <div className={sy.item} key={item.heading}>
          {item.disabled && (
            <div className={sy.coming}>Enabled on Wedding Day!</div>
          )}
          <div className={cnItemMain(item.disabled)}>
            <div className={sy.item_header}>
              <div className={sy.item_icon}>
                <Icon name={item.icon} />
              </div>
              <div className={sy.item_headings}>
                <div className={sy.item_heading}>{item.heading}</div>
                <div className={sy.item_subtext}>{item.subtext}</div>
              </div>
            </div>
            <div className={sy.item_button}>
              <Button
                sx={{ width: '100%' }}
                size="lg"
                unfocus
                {...item.buttonProps}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WedActions;
