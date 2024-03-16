import { FC } from 'react';
import sy from './Title.scss';

type TitleProps = {
  title: string;
  subtitle: string;
};

const Title: FC<TitleProps> = ({ title, subtitle }) => (
  <div className={sy.main}>
    <h2 className={sy.title}>{title}</h2>
    <h6 className={sy.subtitle}>{subtitle}</h6>
  </div>
);

export default Title;
