import { FC, ReactNode } from 'react';
import SlideControl from '../SlideControl';
import { Album } from '@stypes/Slide.types';
import sy from './SlideFrame.scss';

type SlideFrameProps = {
  album: Album;
  counts: string;
  isFetching: boolean;
  isPlaying: boolean;
  header: ReactNode;
  children: ReactNode;
};

const SlideFrame: FC<SlideFrameProps> = (props) => {
  const { album, counts, isFetching, isPlaying, header, children } = props;

  return (
    <div className={sy.edge}>
      <div className={sy.header}>{header}</div>
      <div className={sy.main}>
        {children}
        {!isPlaying && <SlideControl album={album} />}
      </div>
      <div className={sy.footer}>
        <div className={sy.footer_counts}>{counts}</div>
        <div className={sy.footer_center} />
        <div className={sy.footer_status}>{isFetching && 'UPDATING..'}</div>
      </div>
    </div>
  );
};

export default SlideFrame;
