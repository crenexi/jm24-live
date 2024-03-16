import { FC, ErrorInfo } from 'react';
import sy from './ErrorFallback.scss';

interface ErrorFallbackProps {
  error: Error;
  errorInfo?: ErrorInfo;
  resetErrorBoundary: () => void;
}

const ErrorFallback: FC<ErrorFallbackProps> = (props) => {
  const { error, errorInfo, resetErrorBoundary } = props;
  const stack = errorInfo?.componentStack?.trim();

  return (
    <div className={sy.edge}>
      <div className={sy.edge_inner}>
        <h3 className={sy.title}>Something went wrong.</h3>
        <pre className={sy.message}>{error.toString()}</pre>
        {errorInfo && (
          <pre className={sy.stack}>{stack}</pre>
        )}
        <button
          className={sy.button}
          type="button"
          onClick={resetErrorBoundary}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
