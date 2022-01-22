import { NetworkStatusCode } from '@solness/network/config';

export const ErrorTitleMapping: Record<NetworkStatusCode, string> = {
  [NetworkStatusCode.FORBIDDEN]: 'Sorry, but this page is forbidden.',
  [NetworkStatusCode.NOT_FOUND]: 'The page you are looking for is not here.',
  [NetworkStatusCode.UNAUTHORIZED]: 'Oops, authorized.',
};
