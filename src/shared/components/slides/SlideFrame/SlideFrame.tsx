import { FC, ReactNode, useState, useEffect } from 'react';
import { dataHeaders } from '@config/data-static';
import { Album } from '@stypes/Slide.types';
import { Loading } from '@components/feedback';
import SlideControl from '../SlideControl';
import sy from './SlideFrame.scss';

type SlideFrameProps = {
  album: Album;
  counts: string;
  isFetching: boolean;
  isPlaying: boolean;
  header?: ReactNode;
  children: ReactNode;
};

const SlideFrame: FC<SlideFrameProps> = (props) => {
  const { album, counts, isFetching, isPlaying, header, children } = props;
  const [headerBit, setHeaderBit] = useState<string>('');

  useEffect(() => {
    if (!header) {
      const ranIndex = Math.floor(Math.random() * dataHeaders.length);
      setHeaderBit(dataHeaders[ranIndex]);
    }
  }, [header]);

  return (
    <div className={sy.edge}>
      <div className={sy.header}>
        <div className={sy.header_center}>{header || headerBit}</div>
      </div>
      <div className={sy.main}>
        {children}
        {!isPlaying && <SlideControl album={album} />}
      </div>
      <div className={sy.footer}>
        <div className={sy.footer_counts}>{counts}</div>
        <div className={sy.footer_center} />
        <div className={sy.footer_status}>
          {isFetching && (
            <div className={sy.footer_loading}>
              <Loading size="sm" />
              <span>UPDATING..</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlideFrame;
