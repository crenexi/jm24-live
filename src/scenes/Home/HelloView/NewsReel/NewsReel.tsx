import { FC } from 'react';
import { Story } from '@stypes/News.types';
import NewsPics from './NewsPics';
import StorySubtext from './StorySubtext';
import sy from './NewsReel.scss';

export type NewsReelProps = {
  story: Story | null;
};

const NewsReel: FC<NewsReelProps> = ({ story }) => {
  if (!story) return null;

  const { isBreaking, headline, subtext } = story;

  return (
    <div className={sy.reel}>
      <NewsPics story={story} />
      {isBreaking && <div className={sy.breaking}>BREAKING NEWS</div>}
      <div className={sy.headline}>{headline}</div>
      <div className={sy.subtext}>
        <StorySubtext>{subtext}</StorySubtext>
      </div>
    </div>
  );
};

export default NewsReel;
