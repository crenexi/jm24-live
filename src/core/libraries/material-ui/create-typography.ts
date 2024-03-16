import { svar } from '@helpers/index';
import Typography from './types/typography.types';

const ffBase = svar('font_family_base');
const ffPrimary = svar('font_family_primary');

// Note: this configuration should match scss core typography config
const createTypography = (): Typography => ({
  fontFamily: ffBase,
  h1: {
    fontFamily: ffPrimary,
    fontSize: '4.5rem',
    lineHeight: '1',
    fontWeight: '300',
    letterSpacing: '-1.6px',
  },
  h2: {
    fontFamily: ffPrimary,
    fontSize: '3rem',
    lineHeight: '1.1',
    fontWeight: '300',
    letterSpacing: '-.8px',
  },
  h3: {
    fontFamily: ffPrimary,
    fontSize: '2.3rem',
    lineHeight: '1.2',
    fontWeight: '400',
    letterSpacing: '0',
  },
  h4: {
    fontFamily: ffPrimary,
    fontSize: '1.7rem',
    lineHeight: '1.3',
    fontWeight: '400',
    letterSpacing: '.3px',
  },
  h5: {
    fontFamily: ffBase,
    fontSize: '1rem',
    lineHeight: '1.4',
    fontWeight: '700',
    letterSpacing: '1px',
  },
  h6: {
    fontFamily: ffBase,
    fontSize: '.8rem',
    lineHeight: '1.5',
    fontWeight: '700',
    letterSpacing: '2px',
  },
});

export default createTypography;
