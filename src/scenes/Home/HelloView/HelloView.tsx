import { FC } from 'react';
import { Loading } from '@components/feedback';
import { News } from './HelloViewPod';
import NewsReel from './NewsReel';
import sy from './HelloView.scss';

type HelloViewProps = {
  urlLogo: string;
  news: News | null;
};

const HelloView: FC<HelloViewProps> = (props) => {
  const { urlLogo, news } = props;

  const jsxNewsReel = (() => {
    if (!news) return 'No story';
    if (news.error) return news.error.message;
    if (news.isLoading) return <Loading />;
    return <NewsReel story={news.story} />;
  })();

  return (
    <div className={sy.edge}>
      <div className={sy.main}>
        <div className={sy.welcome}>&nbsp;</div>
        <div className={sy.brand}>
          <img src={urlLogo} alt="Logo GIF" />
        </div>
        <div className={sy.clock}>&nbsp;</div>
        <div className={sy.events}>{jsxNewsReel}</div>
      </div>
    </div>
  );
};

export default HelloView;
