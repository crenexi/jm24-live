import { Slide } from '@stypes/Slide.types';
import { Err } from '../photo-service.types';
import {
  config,
  timeoutSignal,
  handleTimeoutErr,
  handleUnknownErr,
} from '../photo-service-helpers';

const readPhotos = async (albumId: string): Promise<Slide[]> => {
  const urlEndpoint = `${config.apiBaseUrl}/live/photos/${albumId}`;

  try {
    const res = await fetch(urlEndpoint, {
      method: 'GET',
      signal: timeoutSignal(),
      headers: { 'X-API-Key': config.apiKey },
    });

    // Bad response
    if (!res.ok) {
      const errMsg = `Photos API Error: ${res.status} - ${res.statusText}`;
      throw handleUnknownErr(new Err(errMsg, res.status, 'APIErr'));
    }

    // Good response
    const data = (await res.json()) as Promise<Slide[]>;
    return data;
  } catch (err) {
    if (err.name === 'AbortError') throw handleTimeoutErr(err);
    throw handleUnknownErr(err);
  }
};

export default readPhotos;
