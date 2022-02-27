import { RefreshTokenMutation } from '@solness/generated-types';

export const isRefreshTokenResponseValid = (result: {
  data?: RefreshTokenMutation;
}) => {
  const isWithSuccess = result?.data?.refresh?.success;
  const hasData = result?.data?.refresh?.data;
  const isValid = Boolean(isWithSuccess && hasData);

  return isValid;
};
