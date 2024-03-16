import { Err } from '../contentful.types';
import {
  config,
  timeoutSignal,
  handleTimeoutErr,
  handleUnknownErr,
  warnInvalidData,
  buildApiUrl,
} from '../contentful-helpers';

const deleteEntry = async <T>(endpoint: string): Promise<T> => {
  try {
    const res = await fetch(buildApiUrl(endpoint), {
      method: 'DELETE',
      signal: timeoutSignal(),
      headers: {
        'X-API-Key': config.apiKey,
      },
    });

    // Bad response
    if (!res.ok) {
      const errMsg = `API Error: ${res.status} - ${res.statusText}`;
      throw handleUnknownErr(new Err(errMsg, res.status, 'APIErr'));
    }

    // Good response
    const data = await res.json();
    if (!data?.message) warnInvalidData(`Expected 'message' on data`);

    return data as T;
  } catch (err) {
    if (err.name === 'AbortError') throw handleTimeoutErr(err);
    throw handleUnknownErr(err);
  }
};

export default deleteEntry;
