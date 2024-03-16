import { FC } from 'react';
import classNames from 'classnames';
import { TextProps, textDefaults } from './Text.types';
import sy from './Text.scss';

const Text: FC<TextProps> = (props) => {
  const { children, preset, size, color, inline, truncate } = props;
  const { className, sx } = props;

  const isMatch = (pKey: string, sKey: string): boolean => {
    return pKey === preset && sKey === size;
  };

  const cnText = classNames(
    {
      [sy.display__sm]: isMatch('display', 'sm'),
      [sy.display__md]: isMatch('display', 'md'),
      [sy.display__lg]: isMatch('display', 'lg'),
      [sy.headline__sm]: isMatch('headline', 'sm'),
      [sy.headline__md]: isMatch('headline', 'md'),
      [sy.headline__lg]: isMatch('headline', 'lg'),
      [sy.title__sm]: isMatch('title', 'sm'),
      [sy.title__md]: isMatch('title', 'md'),
      [sy.title__lg]: isMatch('title', 'lg'),
      [sy.body__sm]: isMatch('body', 'sm'),
      [sy.body__md]: isMatch('body', 'md'),
      [sy.body__lg]: isMatch('body', 'lg'),
      [sy.label__sm]: isMatch('label', 'sm'),
      [sy.label__md]: isMatch('label', 'md'),
      [sy.label__lg]: isMatch('label', 'lg'),
      [sy.truncate]: truncate,
    },
    className,
  );

  const sxText = {
    ...(color ? { color } : {}),
    ...(sx || {}),
  };

  // prettier-ignore
  return inline
    ? <span className={cnText} style={sxText}>{children}</span>
    : <div className={cnText} style={sxText}>{children}</div>;
};

Text.defaultProps = textDefaults;

export default Text;
