import appSettings from '@config/app-settings';

import { CreateMessageFn, MessageFn, Logger } from './logger.types';

const { logLevel } = appSettings;

/** Helper to create debug log */
const createMessage: CreateMessageFn = (level, { msg, src }) => {
  const isString = typeof msg === 'string';
  const isInfo = ['dir', 'dir', 'table'].includes(level);

  const pLevel = isInfo ? 'info' : level;
  const namespace = `app:${pLevel}`;
  const prefix = src ? `[${namespace}] (${src.trim})` : `[${namespace}]`;

  // Only log debug/trace if logLevel is 'debug'
  const debugLevels = ['debug', 'trace'];
  if (logLevel !== 'debug' && debugLevels.includes(level)) return;

  // In production, log only warn+
  const prodLevels = ['warn', 'error'];
  if (prodLevels.includes(logLevel) && !prodLevels.includes(level)) return;

  /* eslint @typescript-eslint/no-explicit-any:0 */
  if (['dir', 'table'].includes(level)) {
    (console as any)[level](msg);
  } else if (isString) {
    (console as any)[level](`${prefix} ${msg}`);
  } else {
    (console as any)[level](prefix, msg);
  }
};

const logger: Logger = (() => {
  // Main log levels
  const error: MessageFn = (msg, src) => createMessage('error', { msg, src });
  const warn: MessageFn = (msg, src) => createMessage('warn', { msg, src });
  const info: MessageFn = (msg, src) => createMessage('info', { msg, src });
  const debug: MessageFn = (msg, src) => createMessage('debug', { msg, src });
  const trace: MessageFn = (msg, src) => createMessage('trace', { msg, src });

  // Other info logs
  const log: MessageFn = (msg, src) => createMessage('log', { msg, src });
  const dir: MessageFn = (msg, src) => createMessage('dir', { msg, src });
  const table: MessageFn = (msg, src) => createMessage('table', { msg, src });

  /* eslint-disable no-console */
  const others = {
    log,
    dir,
    table,
    group: console.group,
    groupCollapsed: console.groupCollapsed,
    groupEnd: console.groupEnd,
  };

  return { error, warn, info, debug, trace, ...others };
})();

export default logger;
