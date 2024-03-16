import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { breakpointMarks } from '@config/app-theme';
import logger from '@services/logger';

/**
 * Custom hook to check if the current screen size matches the given breakpoint.
 *
 * @param key - Breakpoint key to check against. Valid keys are defined in 'breakpointMarks'.
 * @returns {boolean} - Returns true if the current screen size matches the breakpoint, false otherwise.
 */
const useBreakpoint = (key: string): boolean => {
  const theme = useTheme();

  // Define the standard breakpoint keys
  const plusKeys = breakpointMarks.map((k) => `${k}+`);
  const keys = [...breakpointMarks, ...plusKeys];

  // Ensure the provided key is valid.
  if (!keys.includes(key)) {
    logger.error(`Key ${key} invalid for useBreakpoint hook`);
    return false;
  }

  // Calculate the breakpoint query based on the key
  // Keys ending with '+' use 'up' (this breakpoint and up)
  // For standard breakpoints, use 'only' (only this mark)
  const breakpointQuery = key.endsWith('+')
    ? theme.breakpoints.up(key.slice(0, -1))
    : theme.breakpoints.only(key);

  // Call useMediaQuery with the calculated breakpoint query
  return useMediaQuery(breakpointQuery);
};

export default useBreakpoint;
