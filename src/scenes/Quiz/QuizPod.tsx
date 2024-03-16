import { FC, useState } from 'react';
import useDataStatic from '@hooks/use-data-static';
import logger from '@services/logger';
import Quiz from './Quiz';

// Helper for page rotation
const rotatePage = (items: any[], currIndex: number, dir: 'next' | 'prev') => {
  const numItems = items.length;
  const step = dir === 'next' ? 1 : -1;
  return (currIndex + step + numItems) % numItems;
};

const QuizPod: FC = () => {
  const dStatic = useDataStatic();

  // Ensure quiz items exist
  const quizItems = dStatic?.quizItems;
  if (!quizItems) {
    logger.warn('No quiz items exist on data');
    return null;
  }

  const [pageIndex, setPageIndex] = useState<number>(0);

  // Current page data
  const currItem = quizItems[pageIndex];

  // Pages state and actions
  const pages = {
    count: quizItems.length,
    index: pageIndex,
    prev: () => setPageIndex(rotatePage(quizItems, pageIndex, 'prev')),
    next: () => setPageIndex(rotatePage(quizItems, pageIndex, 'next')),
  };

  return <Quiz currItem={currItem} pages={pages} />;
};

export default QuizPod;
