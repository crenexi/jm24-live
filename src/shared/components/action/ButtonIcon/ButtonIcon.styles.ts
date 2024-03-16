import { SxProps, Theme } from '@mui/material/styles';
import { svar } from '@helpers/helpers';

type SxVariant = SxProps<Theme>;

const coPrimaryDarker = svar('co_primary_darker');
const coPrimaryBase = svar('co_primary_base');
const coPrimaryLightest = svar('co_primary_lightest');
const coDangerBase = svar('co_danger_base');
const coDangerDarker = svar('co_danger_darker');
const coSuccessBase = svar('co_success_base');
const coSuccessDarker = svar('co_success_darker');
const shadow3 = svar('shadow_s3');

const gradDanger = `linear-gradient(135deg, ${coDangerDarker}, ${coDangerBase})`;
const gradSuccess = `linear-gradient(135deg, ${coSuccessDarker}, ${coSuccessBase})`;

const defaults: SxVariant = {
  color: '#fff',
  background: 'rgba(255, 255, 255, .07)',
  borderColor: 'rgba(255, 255, 255, .14)',
  hoverColor: 'rgba(255, 255, 255, .18)',
  active: {
    transform: 'translateY(1px)',
  },
  focus: {
    hoverColor: 'rgba(255, 255, 255, .3)',
    boxShadow: `inset 0 0 0 2px #1f1c21`,
  },
  disabled: {
    color: '#ffffff40 !important',
    borderColor: '#514a56',
    textShadow: 'none',
    boxShadow: 'none',
  },
};

const variantDefault: SxVariant = {
  width: '3rem',
  height: '3rem',
  padding: '6px',
  fontSize: '1.4rem',
  color: defaults.color,
  backgroundColor: defaults.background,
  border: `2px solid ${defaults.borderColor}`,
  borderRadius: '50%',
  '&:hover': {
    color: defaults.color,
    backgroundColor: defaults.hoverColor,
    borderColor: defaults.hoverColor,
  },
  '&:active': {
    ...defaults.active,
    color: defaults.color,
  },
  '&:focus': {
    ...defaults.focus,
    color: defaults.color,
  },
  '&.Mui-disabled': defaults.disabled,
};

const variantPrimary: SxVariant = {
  color: '#fff',
  backgroundColor: '#705485',
  border: '2px solid #705485',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#84639d',
    borderColor: '#84639d',
    boxShadow: shadow3,
  },
  '&:focus': {
    ...defaults.focus,
    borderColor: '#84639d',
    color: '#fff',
  },
  '&:active': {
    ...defaults.active,
    color: '#fff',
  },
  '&.Mui-disabled': {
    ...defaults.disabled,
    backgroundColor: '#f5f5f5',
  },
};

const variantSecondary: SxVariant = {
  color: '#fff',
  backgroundColor: 'transparent',
  border: `2px solid #705485`,
  '&:hover': {
    color: '#fff',
    backgroundColor: '#705485',
    borderColor: '#705485 !important',
    boxShadow: shadow3,
  },
  '&:active': {
    ...defaults.active,
  },
  '&:focus': {
    ...defaults.focus,
    borderColor: '#705485',
    color: '#fff',
  },
  '&:hover:focus': {
    color: '#fff',
  },
};

const variantText: SxVariant = {
  color: 'inherit',
  backgroundColor: 'transparent',
  border: 'none',
  textDecoration: 'underline',
  '&:hover': {
    color: '#8d6fa5',
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    textDecoration: 'underline',
  },
  '&:active': {
    ...defaults.active,
    color: '#8d6fa5',
  },
  '&:focus': {
    color: '#8d6fa5',
    boxShadow: `inset 0 0 0 1px #5c456e`,
    textDecoration: 'none',
  },
};

const variantGhost: SxVariant = {
  backgroundColor: 'transparent',
  border: '2px solid transparent',
  '&:hover': {
    backgroundColor: defaults.hoverColor,
    borderColor: defaults.hoverColor,
  },
  '&:active': {
    ...defaults.active,
  },
  '&:focus': {
    ...defaults.focus,
  },
};

const variantWhite: SxVariant = {
  color: '#fff',
  backgroundColor: 'transparent',
  border: `2px solid #fff`,
  '&:hover': {
    color: '#342b3a',
    backgroundColor: '#fff',
    boxShadow: shadow3,
  },
  '&:active': {
    ...defaults.active,
  },
  '&:focus': {
    ...defaults.focus,
    boxShadow: 'inset 0 0 0 2px #0b0b0b',
    borderColor: '#fff',
    color: '#fff',
  },
  '&:hover:focus': {
    color: coPrimaryDarker,
  },
};

const variantDanger: SxVariant = {
  color: '#fff',
  background: `${gradDanger}, ${coDangerBase}`,
  border: `2px solid ${coDangerBase}`,
  '&:hover': {
    color: '#fff',
    background: coDangerDarker,
    borderColor: coDangerDarker,
    boxShadow: shadow3,
    transform: 'translatey(-1px)',
  },
  '&:active': {
    ...defaults.active,
  },
  '&:focus': {
    color: '#fff',
    borderColor: coDangerBase,
    boxShadow: 'inset 0 0 0 2px #f4f4f4',
  },
  '&.Mui-disabled': {
    ...defaults.disabled,
    backgroundColor: '#f5f5f5',
  },
};

const variantSuccess: SxVariant = {
  color: '#fff',
  background: `${gradSuccess}, ${coSuccessBase}`,
  border: `2px solid ${coSuccessBase}`,
  '&:hover': {
    color: '#fff',
    backgroundColor: coSuccessBase,
    borderColor: coSuccessBase,
    boxShadow: shadow3,
    transform: 'translatey(-1px)',
  },
  '&:active': {
    ...defaults.active,
  },
  '&:focus': {
    color: '#fff',
    borderColor: coSuccessBase,
    boxShadow: 'inset 0 0 0 2px #f4f4f4',
  },
  '&.Mui-disabled': {
    ...defaults.disabled,
    backgroundColor: '#f5f5f5',
  },
};

const sizeSm: SxVariant = {
  width: '2rem',
  height: '2rem',
  fontSize: '1rem',
  borderWidth: '1px',
};

const sizeLg: SxVariant = {
  width: '4.3rem',
  height: '4.3rem',
  fontSize: '1.8rem',
};

export default {
  variantDefault,
  variantPrimary,
  variantSecondary,
  variantText,
  variantGhost,
  variantWhite,
  variantDanger,
  variantSuccess,
  sizeSm,
  sizeLg,
};
