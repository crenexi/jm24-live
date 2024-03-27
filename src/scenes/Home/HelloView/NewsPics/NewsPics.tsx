import { FC } from 'react';
import { Story } from '@stypes/News.types';
import sy from './NewsPics.scss';

type NewsPicsProps = {
  story: Story;
};

const NewsPics: FC<NewsPicsProps> = ({ story }) => {
  return (
    <div className={sy.edge}>
      <div className={sy.main}>TODO</div>
    </div>
  );
};

export default NewsPics;
