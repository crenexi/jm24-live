import logger from '../logger';
import {
  ContentfulConfig,
  TimeoutSignalFn,
  HandleTimeoutErrFn,
  HandleUnknownErrFn,
  Err,
} from './contentful.types';

const TIMEOUT = 5000;

export const config: ContentfulConfig = (() => {
  const apiBaseUrl = process.env.CX_API_BASE_URL;
  const apiKey = process.env.CX_API_KEY;

  if (!apiBaseUrl || !apiKey) {
    throw new Error('Missing contentful config');
  }

  return { apiBaseUrl, apiKey };
})();

export const timeoutSignal: TimeoutSignalFn = (ms = TIMEOUT) => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms);
  return controller.signal;
};

export const handleTimeoutErr: HandleTimeoutErrFn = (err) => {
  const errMsg = `Fetching data failed: ${err.message || err}`;
  logger.error(errMsg);
  throw new Err(errMsg, 499, 'NetworkErr');
};

export const handleUnknownErr: HandleUnknownErrFn = (err) => {
  const errMsg = err.message || String(err);
  logger.error(errMsg);
  throw new Err(errMsg, err.status || 500, err.type || 'UnknownErr');
};

export const warnInvalidData = (msg: string): void => {
  logger.warn(`Invalid contentful res.data: ${msg}`);
};

export const buildApiUrl = (endpoint: string): string => {
  const cleanedEndpoint = endpoint.replace(/^\//, ''); // leading slash
  const baseUrl = config.apiBaseUrl.replace(/\/$/, ''); // no trailing slash
  return `${baseUrl}/${cleanedEndpoint}`;
};

export const dataSyncDelay = (ms = 5000) => {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms));
};
