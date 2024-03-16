import logger from './logger';

type CopyService = {
  copy: (str: string) => Promise<void>;
};

/** Copy to clipboard - fallback */
const copyToClipboardFallback = (str: string): boolean => {
  const errMsg = '(Fallback) Copying to clipboard failed.';
  const textAreaElm = document.createElement('textarea');
  textAreaElm.value = str;

  // Avoid scrolling to bottom
  textAreaElm.style.top = '0';
  textAreaElm.style.left = '0';
  textAreaElm.style.position = 'fixed';

  document.body.appendChild(textAreaElm);
  textAreaElm.focus();
  textAreaElm.select();

  try {
    const successful = document.execCommand('copy');
    if (!successful) {
      logger.warn(errMsg);
      return false;
    }
    return true;
  } catch (err) {
    logger.error(errMsg, err);
    return false;
  } finally {
    document.body.removeChild(textAreaElm);
  }
};

const copyToClipboard = (str: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Fallback on textarea solution
    if (!navigator.clipboard) {
      const success = copyToClipboardFallback(str);

      if (success) {
        resolve();
      } else {
        reject(new Error('Failed to copy using fallback method'));
        return;
      }
    }

    // Use Clipboard API
    const errMsg = '(Async) Copying to clipboard failed';
    navigator.clipboard
      .writeText(str)
      .then(resolve)
      .catch((err) => {
        logger.error(errMsg, err);
        reject(err);
      });
  });
};

/**
 * Copies a given string to the clipboard.
 *
 * This function first tries to use the Clipboard API for copying. If the Clipboard API
 * is not available (e.g., due to browser compatibility issues), it falls back to a
 * more traditional method using a temporary textarea element to perform the copy.
 *
 * @param {string} str - The string to be copied to the clipboard.
 * @returns {Promise<void>} A promise that resolves if the copying is successful.
 *   The promise resolves immediately if an invalid (empty) string is provided.
 *   If the copying operation fails, the promise rejects with an error.
 *
 * @example
 * copy('Text to copy').then(() => {
 *   console.log('Text copied successfully!');
 * }).catch((error) => {
 *   console.error('Failed to copy text:', error);
 * });
 */
const copy = (str: string): Promise<void> => {
  if (!str) {
    const errMsg = `Invalid 'str' supplied to CopyService.copy`;
    logger.warn(errMsg);
    return Promise.resolve();
  }

  // Returns a promise, or just returns if fallback is used
  return copyToClipboard(str);
};

const copyService: CopyService = { copy };

export default copyService;
