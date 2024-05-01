/**
 * Returns the correct API URL based on the base URL.
 * If the base URL includes 'localhost' or '127.0.0.1', uses HTTP.
 * Otherwise, defaults to HTTPS.
 */
const getApiUrl = (baseUrl: string) => {
  let protocol = 'https';

  // If targeting localhost or loopback, use HTTP
  if (baseUrl.includes('localhost') || baseUrl.includes('127.0.0.1')) {
    protocol = 'http';
  }

  // Ensure the base URL has the correct protocol
  return `${protocol}://${baseUrl.replace(/^https?:\/\//, '')}`;
};

export default getApiUrl;
