import { ApolloError, gql } from '@apollo/client';
import {
  CompanyCashDetailsInput,
  UpdateCompanyCashDetailsMutation,
  UpdateCompanyCashDetailsMutationVariables,
} from '@solness/generated-types';
import { useMutation } from '@solness/network';

const UPDATE_COMPANY_CASH_DETAILS = gql`
  mutation UpdateCompanyCashDetails($model: CompanyCashDetailsInput!) {
    updateCompanyCashDetails(model: $model) {
      success
      messages
    }
  }
`;

export const useUpdateCompanyCashDetails = ({
  onCompleted,
  onError,
}: {
  onCompleted?: () => void;
  onError?: (error: ApolloError) => void;
} = {}) => {
  const [updateCompanyCashDetails, options] = useMutation<
    UpdateCompanyCashDetailsMutation,
    UpdateCompanyCashDetailsMutationVariables
  >(UPDATE_COMPANY_CASH_DETAILS, {
    onCompleted,
    onError,
  });

  const handleUpdateCompanyCashDetails = (model: CompanyCashDetailsInput) =>
    updateCompanyCashDetails({ variables: { model } });

  return {
    updateCompanyCashDetails: handleUpdateCompanyCashDetails,
    ...options,
  };
};
