import { Err } from '@services/contentful/contentful.types';

type PollForChangesOpts<T> = {
  maxAttempts?: number;
  pollInterval?: number;
  serviceFn: () => Promise<T[] | Err>;
  successFn: (data: T[]) => boolean;
  onSuccess: (data: T[]) => void;
  onError: (err: Err) => void;
};

type RetryWithBackoff = (
  retryFn: () => void,
  maxAttempts: number,
  attempt: number,
) => void;

/**
 * `pollForChanges` is an asynchronous utility function for polling data changes.
 * It repeatedly executes a provided service function until a specified condition is met or a maximum number of attempts is reached.
 *
 * @param {PollForChangesOpts<T>} opts - The options object containing all necessary parameters.
 *   - serviceFn: A function returning a promise that fetches the data.
 *   - successFn: A function that checks if the polled condition is met.
 *   - onSuccess: A function to do an operation once the condition is met
 *   - onError: A function to handle any errors that occur during polling.
 *   - maxAttempts: (Optional) Maximum number of polling attempts. Default is 5.
 *   - pollInterval: (Optional) Time interval (in milliseconds) between polling attempts. Default is 3000 ms.
 *
 * @returns A cleanup function that clears the polling interval.
 */
const pollForChanges = async <T extends { id: string }>(
  opts: PollForChangesOpts<T>,
) => {
  const {
    serviceFn,
    successFn,
    onSuccess,
    onError,
    maxAttempts = 7,
    pollInterval = 5000,
  } = opts;

  let attempts = 0;

  const retryWithBackoff: RetryWithBackoff = (
    retryFn,
    maxAttempts,
    attempt = 1,
  ) => {
    // Exponential backoff delay
    const retryDelay = Math.pow(2, attempt) * 1000;
    setTimeout(retryFn, retryDelay);
  };

  const executePoll = async () => {
    attempts++;

    try {
      const res = await serviceFn();
      const data = res as T[];

      if (successFn(data)) {
        clearInterval(intervalId);
        onSuccess(data);
        return;
      }
    } catch (error) {
      if (error instanceof Err) {
        // Handle 429 Too Many Requests specifically
        if (error.status === 429 && attempts < maxAttempts) {
          console.log(`Retrying after attempt ${attempts} due to 429 error.`);
          retryWithBackoff(executePoll, maxAttempts, attempts);
          return;
        }
      }
      // Handle all other errors
      clearInterval(intervalId);
      onError(error);
      return;
    }

    if (attempts >= maxAttempts) {
      clearInterval(intervalId);
    }
  };

  // Directly execute the first poll immediately, then set the interval
  executePoll();
  const intervalId = setInterval(executePoll, pollInterval);

  // Return a cleanup function
  return () => clearInterval(intervalId);
};

export default pollForChanges;
