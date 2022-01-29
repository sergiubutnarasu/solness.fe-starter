import { Page, Section } from '@solness/ui';
import { SecurityForm, UserForm } from '../../components';
import { useGetUser } from './data';

const ProfilePage = () => {
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

      <Section
        title="Security"
        description="Your email address represents the key to enter in this platform to
        simplify the login process."
      >
        <SecurityForm email={user.email} />
      </Section>
    </Page>
  );
};

export default ProfilePage;
