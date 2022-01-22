import { Page } from '@solness/ui';
import React, { FunctionComponent } from 'react';
import { CompanyUser } from '../../components';

export interface Props {
  companyUserId: number;
}

const CompanyUserPage: FunctionComponent<Props> = ({ companyUserId }) => (
  <>
    <Page
      marginBottom={8}
      title="Member details"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quasi?"
    >
      <CompanyUser companyUserId={companyUserId} />
    </Page>
  </>
);

export default CompanyUserPage;
