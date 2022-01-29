import {
  Avatar,
  Box,
  Icon,
  LabelValue,
  Section,
  Tag,
  Tooltip,
  Typography,
} from '@solness/ui';
import React, { FunctionComponent } from 'react';
import CompanyUserDangerZone from '../company-user-danger-zone';
import CompanyUserIcon from '../company-user-icon';
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

  const {
    verified,
    roles,
    user: { id: userId, firstName, lastName, email, title, description },
  } = companyUser;

  return (
    <>
      <Section
        title="Details"
        description="Lorem ipsum dolor sit, amet consectetur!"
      >
        <Box display="flex" alignItems="center" mb="2">
          <Avatar size="md" mb={2}>
            <Avatar.Badge bg="white">
              <CompanyUserIcon verified={verified} roles={roles} />
            </Avatar.Badge>
          </Avatar>

          <Box ml="2">
            <Typography.Title fontSize="md" fontWeight="semibold">
              {firstName} {lastName}
            </Typography.Title>

            <Typography.Text fontSize="xs" color="gray.500">
              {title ?? 'Unknown'}
            </Typography.Text>
          </Box>
        </Box>

        <LabelValue stripped label="Email">
          {email}
        </LabelValue>
        <LabelValue label="Description">
          {description ?? 'Description is missing'}
        </LabelValue>
      </Section>

      {userId && allowExcludeUser && <CompanyUserDangerZone userId={userId} />}
    </>
  );
};

export default CompanyUser;
