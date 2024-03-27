import { FC } from 'react';
import { Story } from '@stypes/News.types';
import StorySubtext from './StorySubtext';
import sy from './NewsReel.scss';

type NewsReelProps = {
  story: Story | null;
};

const NewsReel: FC<NewsReelProps> = ({ story }) => {
  // No story data
  if (!story) return null;

  const { isBreaking, headline, subtext } = story;

  return (
    <div className={sy.reel}>
      <div className={sy.breaking}>
        {isBreaking && <div className={sy.breaking_box}>BREAKING NEWS</div>}
      </div>
      <div className={sy.headline}>{headline}</div>
      <div className={sy.subtext}>
        <StorySubtext>{subtext}</StorySubtext>
      </div>
    </div>
  );
};

export default NewsReel;
