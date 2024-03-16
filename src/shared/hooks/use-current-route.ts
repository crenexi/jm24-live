import { useLocation } from 'react-router-dom';

type UseCurrentRoute = (opts: { depth?: number }) => string;

const useCurrentRoute: UseCurrentRoute = (opts = {}) => {
  const { depth } = opts;
  const { pathname } = useLocation();

  // No depth so return full
  if (!depth) return pathname;

  const subpath = pathname
    .split('/')
    .slice(1, depth + 1)
    .join('/');

  return `/${subpath}`;
};

export default useCurrentRoute;
