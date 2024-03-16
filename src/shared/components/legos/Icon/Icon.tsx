import { FC } from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import logger from '@services/logger';

export type IconPrefix = 'fas' | 'far' | 'fal' | 'fat' | 'fad' | 'fab' | 'fak' | 'fass' | 'fasr' | 'fasl' | 'fast'; // prettier-ignore
const validPrefixes = ['fas', 'far', 'fal', 'fat', 'fad', 'fab', 'fak', 'fass', 'fasr', 'fasl', 'fast']; // prettier-ignore

export type IconProps = Partial<FontAwesomeIconProps> & {
  name: string;
  prefix?: string;
};

const Icon: FC<IconProps> = (props) => {
  const { name, prefix, ...rest } = props;

  // Verify prefix
  const validPrefix = (() => {
    if (!prefix) return 'fal' as IconPrefix;
    if (validPrefixes.includes(prefix)) return prefix as IconPrefix;

    // Invalid prefix
    logger.error(`Invalid icon prefix '${prefix}' used with '${name}' icon`);
    return 'fas';
  })();

  const faProps = {
    icon: [validPrefix || 'fal', name] as IconProp,
    ...rest,
  };

  // Always default to light prefix

  return <FontAwesomeIcon {...faProps} />;
};

export default Icon;
