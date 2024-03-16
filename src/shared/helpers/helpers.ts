import svars from '@sutils/exports.scss';

type MuiClassSet = Record<string, string>;
type CombineClassesFn = (s1: MuiClassSet, s2: MuiClassSet) => MuiClassSet;

export const svar = (key: string): string => {
  const val = svars[key];
  if (!val) throw Error(`Missing in 'svars': ${key}`);
  return val;
};

/* Capitalize string */
export const capitalize = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1);
};

/* Keeps only alphabetical chars */
export const onlyAlpha = (str: string): string => {
  const match = str.match(/[A-Z]/gi);
  return !match ? '' : match.join('');
};

/* Keeps only alphanumeric chars */
export const alphaNumeric = (str: string): string => {
  const match = str.match(/[A-Z0-9]/gi);
  return !match ? '' : match.join('');
};

/* Combine style classes from MUIs makeStyles */
export const combineClasses: CombineClassesFn = (set1, set2) => {
  return Object.entries(set2).reduce(
    (merged, [key, value]) => ({
      ...merged,
      [key]: key in merged ? `${merged[key]} ${value}` : value,
    }),
    set1,
  );
};

/* Determine if user is on a native (mobile) device */
export const userAgent = (() => {
  // The new hint object
  if (navigator.userAgentData) {
    const getUAD = () => navigator.userAgentData;

    return {
      isAndroid: (ua = getUAD()) => ua?.platform === 'Android',
      isIOS: (ua = getUAD()) => ua?.platform === 'iOS',
      isMobile: (ua = getUAD()) => !!ua?.mobile,
    };
  }

  // Fallback to original ua string parsing
  const getUA = () => navigator.userAgent.replace(/\s/g, '').toLowerCase();

  const isAndroid = (ua = getUA()) => !!ua.match(/android/i);
  const isIOS = (ua = getUA()) => !!ua.match(/iphone|ipad|ipod/i);

  const isMobile = (ua = getUA()) => {
    const otherRegEx = /webos|blackberry|windowsphone/i;
    return !!(isAndroid(ua) || isIOS(ua) || ua.match(otherRegEx));
  };

  return { isAndroid, isIOS, isMobile };
})();

/* Convert string to camelCase */
export const toCamelCase = (str: string): string => {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

/* Convert string to kebab-case */
export const toKebabCase = (str: string): string => {
  return str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase(),
  );
};

/* Convert hex color to RGB */
export const hexToRGB = (val: string): number[] => {
  const hex = val.replace(/#/g, '');

  if (hex.length !== 6) {
    throw Error('Only six-digit hex colors are allowed.');
  }

  const aRgbHex = hex.match(/.{1,2}/g);
  if (!aRgbHex || aRgbHex.length !== 3) {
    throw new Error('Invalid hex color.');
  }

  return [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ];
};

/* Determines next index */
export const nextIndex = <T>(arr: T[], i: number) => {
  const isLast = i + 1 === arr.length;
  return isLast ? 0 : i + 1;
};
