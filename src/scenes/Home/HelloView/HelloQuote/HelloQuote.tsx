import { FC, useState, useEffect } from 'react';
import { dataQuotes } from '@config/data-static';
import useLocalStorage from '@hooks/use-local-storage';
import { Icon } from '@components/legos';
import sy from './HelloQuote.scss';

type Quote = {
  text: string;
  author: string;
} | null;

const HelloQuote: FC = () => {
  const [index, setIndex] = useLocalStorage<number>('jm24_helloQuote', 0);
  const [quote, setQuote] = useState<Quote>(null);
  const [isSetup, setIsSetup] = useState(false);

  useEffect(() => {
    if (dataQuotes && dataQuotes.length > 0 && !isSetup) {
      const safeIndex = index % dataQuotes.length;

      // Set story and setup
      setQuote(dataQuotes[safeIndex]);
      setIsSetup(true);

      // Prepare index for next story immediately
      const nextIndex = (safeIndex + 1) % dataQuotes.length;
      setIndex(nextIndex);
    }
  }, [dataQuotes, index, isSetup, setIndex]);

  if (!quote) return null;

  return (
    <div className={sy.edge}>
      <div className={sy.icon}>
        <Icon name="quote-left" />
      </div>
      <div className={sy.main}>
        <div className={sy.text}>{quote.text}</div>
        <div className={sy.author}>{quote.author}</div>
      </div>
      <div className={sy.icon}>
        <Icon name="quote-right" />
      </div>
    </div>
  );
};

export default HelloQuote;
