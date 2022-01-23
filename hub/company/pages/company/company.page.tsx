import { Link } from '@solness/hub-core';
import { Box, Button, Icon, Page, Section, Tag, Typography } from '@solness/ui';
import { CompanyDetailsCard } from 'hub/company/components';
import { useGetCompany } from '../../data';

const CompanyPage = () => {
  const { company, allowUpdateCompany, loading } = useGetCompany();

  if (loading) {
    <Page
      title="Organization"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laborum?"
    >
      loading company
    </Page>;
  }

  if (!company) {
    return null;
  }

  return (
    <Page
      title="Organization"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laborum?"
      actions={
        allowUpdateCompany && (
          <Link href="/organization/edit">
            <Button
              aria-label="Invite user"
              leftIcon={<Icon icon="edit-solid" />}
              colorScheme="purple"
              size="sm"
            >
              Edit organization
            </Button>
          </Link>
        )
      }
    >
      <Section
        title="Main information"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laborum?"
      >
        <CompanyDetailsCard company={company} />
      </Section>

      <Section title="Contact details">
        <Tag fontSize="xs" mr={2}>
          Email: {company.email}
        </Tag>

        <Tag fontSize="xs">Phone number: {company.phone}</Tag>
      </Section>
    </Page>
  );
};

export default CompanyPage;
