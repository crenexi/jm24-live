import logger from '../logger';
import {
  PhotoServiceConfig,
  TimeoutSignalFn,
  HandleTimeoutErrFn,
  HandleUnknownErrFn,
  Err,
} from './photo-service.types';

const TIMEOUT = 10_000;

export const config: PhotoServiceConfig = (() => {
  const apiBaseUrl = process.env.CX_API_BASE_URL;
  const apiKey = process.env.CX_API_KEY;

  if (!apiBaseUrl || !apiKey) {
    throw new Error('Missing photos config');
  }

  return { apiBaseUrl, apiKey };
})();

export const timeoutSignal: TimeoutSignalFn = (ms = TIMEOUT) => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms);
  return controller.signal;
};

export const handleTimeoutErr: HandleTimeoutErrFn = (err) => {
  const errMsg = `Fetching photos failed: ${err.message || err}`;
  logger.error(errMsg);
  throw new Err(errMsg, 499, 'NetworkErr');
};

export const handleUnknownErr: HandleUnknownErrFn = (err) => {
  const errMsg = err.message || String(err);
  logger.error(errMsg);
  throw new Err(errMsg, err.status || 500, err.type || 'UnknownErr');
};

export const buildApiUrl = (endpoint: string): string => {
  const cleanedEndpoint = endpoint.replace(/^\//, ''); // leading slash
  const baseUrl = config.apiBaseUrl.replace(/\/$/, ''); // no trailing slash
  return `${baseUrl}/${cleanedEndpoint}`;
};
