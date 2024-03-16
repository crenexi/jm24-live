import { Component, ComponentType, Fragment, ErrorInfo, ReactNode, CSSProperties } from 'react';
import logger from '@services/logger';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
  children?: ReactNode;
  FallbackComponent?: ComponentType<{ error: Error; resetErrorBoundary: () => void }>;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  onReset?: () => void;
  resetKeys?: any[];
  className?: string;
  style?: CSSProperties;
}

interface StateError {
  hasError: true;
  error: Error;
  errorInfo?: ErrorInfo;
}

interface StateNoError {
  hasError: false;
  error?: never;
  errorInfo?: never;
}

type State = StateError | StateNoError;

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidUpdate(prevProps: Props) {
    const { hasError } = this.state;
    const { resetKeys } = this.props;

    if (hasError && resetKeys && prevProps.resetKeys !== resetKeys) {
      this.resetErrorBoundary();
    }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError } = this.props;

    logger.error(`Uncaught error: ${error.message}`, error.stack);
    this.setState({ error, errorInfo });
    onError?.(error, errorInfo);
  }

  public resetErrorBoundary = () => {
    const { onReset } = this.props;

    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
    onReset?.();
  };

  public render() {
    const { hasError, error, errorInfo } = this.state;
    const { children, FallbackComponent, className, style } = this.props;

    if (hasError) {
      // Define the fallback props
      const fallbackProps = {
        error,
        errorInfo,
        resetErrorBoundary: this.resetErrorBoundary,
      };

      if (error && FallbackComponent) {
        return <FallbackComponent {...fallbackProps} />;
      }

      // Default fallback content
      const defaultFallbackContent = error ? (
        <Fragment>
          <h1>Something went wrong.</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo?.componentStack}
          </details>
        </Fragment>
      ) : (
        <h3>Something went wrong.</h3>
      );

      return (
        <div className={className} style={style}>
          {defaultFallbackContent}
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
