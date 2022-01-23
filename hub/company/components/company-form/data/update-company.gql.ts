import { ApolloError, gql } from '@apollo/client';
import {
  CompanyInput,
  UpdateCompanyMutation,
  UpdateCompanyMutationVariables,
} from '@solness/generated-types';
import { useMutation } from '@solness/network';

const UPDATE_COMPANY = gql`
  mutation UpdateCompany($model: CompanyInput!) {
    updateCompany(model: $model) {
      success
      messages
    }
  }
`;

export const useUpdateCompany = ({
  onCompleted,
  onError,
}: {
  onCompleted?: () => void;
  onError?: (error: ApolloError) => void;
} = {}) => {
  const [updateCompany, options] = useMutation<
    UpdateCompanyMutation,
    UpdateCompanyMutationVariables
  >(UPDATE_COMPANY, {
    onCompleted,
    onError,
  });

  const handleUpdateCompany = (model: CompanyInput) =>
    updateCompany({ variables: { model } });

  return {
    updateCompany: handleUpdateCompany,
    ...options,
  };
};
