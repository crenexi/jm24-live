import { FC } from 'react';
import sy from './SlideControl.scss';

type SlideControlProps = {};

const SlideControl: FC<SlideControlProps> = () => {
  // const [value, setValue] = React.useState<null>(null);

  return (
    <div className={sy.edge}>
      <div className={sy.main}>Control Panel</div>
    </div>
  );
};

export default SlideControl;
