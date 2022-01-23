import { Page } from '@solness/ui';
import { CompanyForm } from '../../components';
import { useGetCompany } from '../../data';

const EditCompanyPage = () => {
  const { company, loading } = useGetCompany();

  if (loading) {
    return (
      <Page
        title="Edit organization"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laborum?"
      >
        loading company
      </Page>
    );
  }

  if (!company) {
    return null;
  }

  return (
    <Page
      title="Edit organization"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laborum?"
    >
      <CompanyForm company={company} />
    </Page>
  );
};

export default EditCompanyPage;
