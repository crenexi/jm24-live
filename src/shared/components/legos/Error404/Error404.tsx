import { FC } from 'react';
import BgCover from '../../fabric/BgCover';
import { ButtonBack } from '../../action';
import sy from './Error404.scss';

type Content = {
  title: string;
  subtitle: string;
  coverUrl: string;
};

type Error404Props = {
  message?: string;
};

const content: Content = {
  title: `That's strange.`,
  subtitle: `You've reached an alternate reality.`,
  coverUrl: `https://www.crenexi.com/assets/meta/errors/lost-in-jumanji.gif`,
};

const Error404: FC<Error404Props> = ({ message = content.subtitle }) => {
  const { title, coverUrl } = content;

  return (
    <div className={sy.edge}>
      <BgCover
        url={coverUrl}
        imagePosition="60% 60%"
        blanketColor="rgba(0, 0, 0, .7)"
      >
        <div className={sy.main}>
          <div className={sy.main_404}>404</div>
          <h2 className={sy.main_title}>{title}</h2>
          <div className={sy.main_subtitle}>{message}</div>
          <div className={sy.main_action}>
            <ButtonBack
              backTo="/"
              variant="white"
              size="lg"
              startIcon="arrow-left"
            >
              Back to Reality
            </ButtonBack>
          </div>
        </div>
      </BgCover>
    </div>
  );
};

export default Error404;
