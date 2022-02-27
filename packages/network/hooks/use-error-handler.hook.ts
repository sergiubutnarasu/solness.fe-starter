import { fromPromise, NextLink, Observable, Operation } from '@apollo/client';
import { SessionType, useSecurityContext } from '@solness/security';
import { GraphQLError } from 'graphql';
import { useCallback } from 'react';
import { NetworkStatusCode } from '../config';
import { checkStatusCode } from '../helpers';

type PendingRequest = (value: void | PromiseLike<void>) => void;

let isRefreshingToken = false;
let pendingRequests: PendingRequest[] = [];

const resolvePendingRequests = () => {
  isRefreshingToken = false;
  pendingRequests.map((callback) => callback());
  pendingRequests = [];
};

const promiseToObservable = (promise: Promise<SessionType>) =>
  new Observable((subscriber) => {
    promise
      .then(
        (value) => {
          if (subscriber.closed) {
            return;
          }

          subscriber.next(value);
          subscriber.complete();
        },
        (err) => subscriber.error(err),
      )
      .finally(() => {
        resolvePendingRequests();
      });
  });

export const useErrorHandler = () => {
  const { logout, refreshToken } = useSecurityContext();

  const handleErrors = useCallback(
    (
      errors: readonly GraphQLError[],
      operation: Operation,
      forward: NextLink,
    ) => {
      const hasUnauthorizedError = checkStatusCode(
        errors,
        NetworkStatusCode.UNAUTHORIZED,
      );

      if (hasUnauthorizedError) {
        /**
         * if it's getting UNAUTHORIZED error on the refresh token operation
         * redirect to login page
         */
        if (operation.operationName === 'RefreshToken') {
          logout();
          throw new Error('unauthorized refresh token');
        }

        if (!isRefreshingToken) {
          isRefreshingToken = true;

          /**
           * Execute the operation after refresh token will finish
           */
          return promiseToObservable(refreshToken()).flatMap(() => {
            return forward(operation);
          });
        } else {
          /**
           * Those operations will be cached and called after the refresh token
           * will finish
           */
          const forwardResult = fromPromise<void>(
            new Promise((resolve) => {
              pendingRequests.push(() => resolve());
            }),
          );

          return forwardResult.flatMap(() => forward(operation));
        }
      }
    },
    [logout, refreshToken],
  );

  return {
    handleErrors,
  };
};
