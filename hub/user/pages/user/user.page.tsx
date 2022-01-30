import { Page, Section } from '@solness/ui';
import { SecurityForm, UserForm } from '../../components';
import { useGetUser } from './data';

const UserPage = () => {
  const { user, loading } = useGetUser();

  if (loading) {
    return (
      <Page
        marginBottom={8}
        title="My Profile"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quasi?"
      >
        Loading
      </Page>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <Page
      marginBottom={8}
      title="My Profile"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quasi?"
    >
      <Section title="Main information">
        <UserForm user={user} />
      </Section>

      <SecurityForm email={user.email} />
    </Page>
  );
};

export default UserPage;
