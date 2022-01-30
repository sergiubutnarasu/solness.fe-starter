import { Link } from '@solness/hub-core';
import { Button, Icon, LabelValue, Page, Section } from '@solness/ui';
import { CompanyDetailsCard } from '../../components';
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
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      >
        <CompanyDetailsCard company={company} />
      </Section>

      <Section title="Contact details">
        <LabelValue stripped label="Email">
          {company.email}
        </LabelValue>

        <LabelValue label="Phone number">{company.phone}</LabelValue>

        <LabelValue stripped label="Website">
          {company.website}
        </LabelValue>
      </Section>
    </Page>
  );
};

export default CompanyPage;
