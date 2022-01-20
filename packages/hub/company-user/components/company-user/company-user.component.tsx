import { Section } from '@solness/ui';
import React, { FunctionComponent } from 'react';
import CompanyUserDangerZone from '../company-user-danger-zone';
import { CompanyUserLoader } from './company-user-loader.component';
import { useGetCompanyUser } from './data';

export interface Props {
  companyUserId: number;
}

const CompanyUser: FunctionComponent<Props> = ({ companyUserId }) => {
  const { companyUser, allowExcludeUser, loading } =
    useGetCompanyUser(companyUserId);

  if (loading) {
    return <CompanyUserLoader />;
  }

  if (!companyUser) {
    return null;
  }

  return (
    <>
      <Section
        title="Details"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, reiciendis!"
      >
        {companyUser.user.firstName} {companyUser.user.lastName}
      </Section>

      {companyUser.user.id && allowExcludeUser && (
        <CompanyUserDangerZone userId={companyUser.user.id} />
      )}
    </>
  );
};

export default CompanyUser;
