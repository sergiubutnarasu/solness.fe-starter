import { Section } from '@solness/ui';
import React, { FunctionComponent } from 'react';
import UserDangerZone from '../user-danger-zone';
import { useGetCompanyUser } from './data';
import { UserDetailsLoader } from './user-details-loader.component';

export interface Props {
  companyUserId: number;
}

const UserDetails: FunctionComponent<Props> = ({ companyUserId }) => {
  const { companyUser, allowExcludeUser, loading } =
    useGetCompanyUser(companyUserId);

  if (loading) {
    return <UserDetailsLoader />;
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
        <UserDangerZone userId={companyUser.user.id} />
      )}
    </>
  );
};

export default UserDetails;
