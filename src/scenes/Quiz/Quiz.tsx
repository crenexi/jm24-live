import { FC, useState, useEffect } from 'react';
import { QuizItem } from '@stypes/data-static.types';
import { Button, ReturnHomeBlock } from '@components/action';
import { LoadingBlock } from '@components/feedback';
import { Title } from '@components/display';
import classNames from 'classnames';
import sy from './Quiz.scss';

type QuizProps = {
  currItem: QuizItem;
  pages: {
    count: number;
    index: number;
    prev: () => void;
    next: () => void;
  };
};

const Quiz: FC<QuizProps> = ({ currItem, pages }) => {
  const { question, answerNum, answerText, answerPicUrl } = currItem;

  const isFirst = pages.index === 0;
  const isLast = pages.index === pages.count - 1;

  const sxAnswerPic = { backgroundImage: `url('${answerPicUrl}')` };

  const cnAnswerNumDefault = classNames(sy.answer_num, sy.answer_num__loading);
  const [cnAnswerNum, setCnAnswerNum] = useState<string>(cnAnswerNumDefault);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setCnAnswerNum(sy.answer_num);
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currItem]);

  // Header actions
  const jsxActions = (() => {
    if (isLast) {
      return (
        <div className={sy.actions}>
          <div className={sy.actions_item}>
            <Button click={pages.next} startIcon="list-check">
              Start Over
            </Button>
          </div>
        </div>
      );
    }

    const handleClick = (dir: 'prev' | 'next') => {
      setCnAnswerNum(cnAnswerNumDefault);
      if (dir === 'prev') pages.prev();
      if (dir === 'next') pages.next();
    };

    return (
      <div className={sy.actions}>
        <div className={sy.actions_item}>
          <Button
            variant="ghost"
            click={() => handleClick('prev')}
            startIcon="chevron-left"
            disabled={isFirst}
          >
            Prev
          </Button>
        </div>
        <div className={sy.actions_pages}>
          {pages.index + 1} / {pages.count}
        </div>
        <div className={sy.actions_item}>
          <Button
            variant="primary"
            click={() => handleClick('next')}
            endIcon="chevron-right"
          >
            Next
          </Button>
        </div>
      </div>
    );
  })();

  return (
    <ReturnHomeBlock>
      <Title title="Know" subtitle="the number?" />
      <div className={sy.main}>
        {jsxActions}
        <div className={sy.question}>
          <span>&ldquo;{question}&rdquo;</span>
        </div>
        {isLoading ? (
          <LoadingBlock iconName="square-question" padSize="sm" speed={2} />
        ) : (
          <div className={sy.answer}>
            <div className={cnAnswerNum}>{answerNum}</div>
            <div className={sy.answer_pic} style={sxAnswerPic} />
            <div className={sy.answer_text}>{answerText}</div>
          </div>
        )}
      </div>
    </ReturnHomeBlock>
  );
};

export default Quiz;
