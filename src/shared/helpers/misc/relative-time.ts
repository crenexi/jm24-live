import dayjs from 'dayjs';
import relativeTimePlugin from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTimePlugin);

/**
 * Formats a date into relative time.
 * @param date The date to format, can be a Date object, string, or number.
 * @returns A string representing the date in relative time (e.g., "3 days ago").
 */
const relativeTime = (date: Date | string | number): string => {
  return dayjs(date).fromNow();
};

export default relativeTime;
