const processEnv = process.env.BABEL_ENV || process.env.NODE_ENV;

const env = processEnv || 'development';
const isProduction = env === 'production';
const isDevelopment = env === 'development';

const debug = process.env.debug || '';

const cxApiBaseUrl = process.env.CX_API_BASE_URL;
const cxApiKey = process.env.CX_API_KEY;

module.exports = {
  env,
  isProduction,
  isDevelopment,
  debug,
  cxApiBaseUrl,
  cxApiKey,
};
