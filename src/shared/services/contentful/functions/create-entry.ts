import { Err } from '../contentful.types';
import {
  config,
  timeoutSignal,
  handleTimeoutErr,
  handleUnknownErr,
  warnInvalidData,
  buildApiUrl,
} from '../contentful-helpers';

const createEntry = async <T>(
  endpoint: string,
  postData: object,
): Promise<T> => {
  try {
    const res = await fetch(buildApiUrl(endpoint), {
      method: 'POST',
      signal: timeoutSignal(),
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': config.apiKey,
      },
      body: JSON.stringify(postData),
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

export default createEntry;
