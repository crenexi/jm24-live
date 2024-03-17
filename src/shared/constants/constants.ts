type Constants = {
  assetsUrl: string;
};

export const assetsUrl = (() => {
  const isDev = process.env.NODE_ENV === 'development';
  const testDomain = process.env.DOMAIN_TEST;
  return !isDev ? '/assets' : `https://${testDomain}/assets`;
})();

const constants: Constants = {
  assetsUrl,
};

export default constants;
