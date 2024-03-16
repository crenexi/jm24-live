import { FC } from 'react';
import { WisherProvider } from './WisherContext';
import Wisher from './Wisher';

const WisherPod: FC = () => (
  <WisherProvider>
    <Wisher />
  </WisherProvider>
);

export default WisherPod;
