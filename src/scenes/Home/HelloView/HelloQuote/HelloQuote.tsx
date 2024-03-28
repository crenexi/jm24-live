import { FC, useState, useEffect } from 'react';
import { dataQuotes } from '@config/data-static';
import { Icon } from '@components/legos';
import sy from './HelloQuote.scss';

type Quote = {
  text: string;
  author: string;
} | null;

const HelloQuote: FC = () => {
  const [quote, setQuote] = useState<Quote>(null);

  // Select random quote
  useEffect(() => {
    const selectRanQuote = () => {
      const ranIndex = Math.floor(Math.random() * dataQuotes.length);
      return dataQuotes[ranIndex];
    };

    setQuote(selectRanQuote());
  }, []);

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
