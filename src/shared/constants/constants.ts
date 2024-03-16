type Constants = {
  assetsUrl: string;
};

// export const assetsUrl = (() => {
//   const isDev = process.env.NODE_ENV === 'development';
//   const testDomain = process.env.DOMAIN_TEST;
//   return !isDev ? '/assets' : `https://${testDomain}/assets`;
// })();

export const assetsUrl = 'https://stage.crenexi.com/assets/wedding';

const constants: Constants = {
  assetsUrl,
};

export default constants;
