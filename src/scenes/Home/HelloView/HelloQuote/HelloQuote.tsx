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

  // Set the initial quote
  useEffect(() => {
    if (dataQuotes && dataQuotes.length > 0) {
      setQuote(dataQuotes[index]);
    }
  }, [index]);

  // Update index after component mounts or updates
  useEffect(() => {
    if (dataQuotes && dataQuotes.length > 0) {
      // Calculate the next index only when dataQuotes changes
      const nextIndex = (index + 1) % dataQuotes.length;
      setIndex(nextIndex);
    }
  }, [dataQuotes]);

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
