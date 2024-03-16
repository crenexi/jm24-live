import { FC } from 'react';
import Error404 from '@components/legos/Error404';

type ErrorProps = {
  code: number;
};

const Error: FC<ErrorProps> = ({ code }) => {
  if (code === 404) return <Error404 />;
  return null;
};

export default Error;
