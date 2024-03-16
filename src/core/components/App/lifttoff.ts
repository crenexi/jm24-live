import { library as faLibrary } from '@fortawesome/fontawesome-svg-core';
import logger from '@services/logger';
import svars from '@sutils/exports.scss';

type FaIconKeysFn = () => Record<string, string[]>;
type LogLiftoffFn = ({ theme }: { theme: object }) => void;

/* Helper to get list of FA icons */
/* eslint-disable @typescript-eslint/no-explicit-any */
const faIconKeys: FaIconKeysFn = () => {
  const groupKeys = Object.keys((faLibrary as any).definitions);

  return groupKeys.reduce((iconKeys, groupKey) => {
    const keys = Object.keys((faLibrary as any).definitions[groupKey]);
    return { ...iconKeys, [groupKey]: keys };
  }, {} as Record<string, string[]>);
};

export const logLiftoff: LogLiftoffFn = ({ theme }) => {
  logger.groupCollapsed('Liftoff');
  logger.info('Main Engine Start. T-Zero. SRB Ignition. Liftoff.');

  // Log MUI theme
  logger.info('MUI Theme');
  logger.info(theme);

  // Log SCSS variables
  logger.info('SCSS Variables');
  logger.info(svars);

  // Log FA icons
  logger.info('FA Icons');
  logger.info(faIconKeys());

  logger.groupEnd();
};

export default {
  log: logLiftoff,
};
