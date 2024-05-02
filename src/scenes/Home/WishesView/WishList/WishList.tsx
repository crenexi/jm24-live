import { FC } from 'react';
import logger from '@services/logger';
import { relativeTime } from '@helpers/index';
import useContentful from '@hooks/use-contentful';
import { ErrorText } from '@components/display';
import { LoadingBlock } from '@components/feedback';
import { Wish, FeedWish } from '@stypes/Wish.types';
import sy from './WishList.scss';

const WishList: FC = () => {
  const { data, isLoading, error } = useContentful<Wish>('jm24/wish');

  if (error) {
    logger.error(error.message);
    return <ErrorText>Error loading wishes</ErrorText>;
  }

  if (isLoading) return <LoadingBlock />;

  const count = data?.length;
  const countText = count === 1 ? `${count} Wish!` : `${count} Wishes!`;
  if (!count) {
    return <div>No wishes yet.</div>;
  }

  const sortByLatest = (feed: FeedWish[]) => {
    return feed.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  };

  const feed: FeedWish[] = sortByLatest(
    data.map((wish) => {
      return {
        ...wish,
        nameKey: wish.sender.substring(0, 2),
        relativeTime: relativeTime(wish.createdAt),
      };
    }),
  );

  return (
    <div className={sy.edge}>
      <div className={sy.list}>
        {feed.slice(0, 10).map((wish) => (
          <div key={wish.id} className={sy.wish}>
            <div className={sy.wish_aside}>
              <div className={sy.wish_avatar}>{wish.nameKey}</div>
            </div>
            <div className={sy.wish_main}>
              <div className={sy.wish_header}>
                <div className={sy.wish_sender}>{wish.sender}</div>
                <div className={sy.wish_created}>{wish.relativeTime}</div>
              </div>
              <div className={sy.wish_message}>{wish.message}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={sy.footer}>
        <div className={sy.footer_count}>{countText}</div>
      </div>
    </div>
  );
};

export default WishList;
