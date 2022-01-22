import { ApolloError } from '@apollo/client';
import { NetworkStatusCode } from '@solness/network/config';
import { checkStatusCode } from '@solness/network/helpers';
import { NextRouter, withRouter } from 'next/router';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import ErrorComponent from '../error';

interface Props {
  children: ReactNode;
  router: NextRouter;
}

interface State {
  hasError: boolean;
  errorCode?: NetworkStatusCode;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error | ApolloError): State {
    let code;

    if (error instanceof ApolloError) {
      const { graphQLErrors } = error;

      if (checkStatusCode(graphQLErrors, NetworkStatusCode.NOT_FOUND)) {
        code = NetworkStatusCode.NOT_FOUND;
      } else if (checkStatusCode(graphQLErrors, NetworkStatusCode.FORBIDDEN)) {
        code = NetworkStatusCode.FORBIDDEN;
      } else if (
        checkStatusCode(graphQLErrors, NetworkStatusCode.UNAUTHORIZED)
      ) {
        code = NetworkStatusCode.UNAUTHORIZED;
      }
    }

    return { hasError: true, errorCode: code };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  componentDidUpdate(props: Readonly<Props>) {
    if (props.router.pathname !== this.props.router.pathname) {
      // reset error state
      this.setState({ hasError: false });
    }
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorComponent code={this.state.errorCode} />;
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
