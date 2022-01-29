import { Page, Section } from '@solness/ui';
import { SecurityForm, UserForm } from '../../components';

const ProfilePage = () => {
  return (
    <Page
      marginBottom={8}
      title="My Profile"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quasi?"
    >
      <Section title="Main information">
        <UserForm />
      </Section>

      <Section
        title="Security"
        description="Your email address represents the key to enter in this platform to
        simplify the login process."
      >
        <SecurityForm />
      </Section>
    </Page>
  );
};

export default ProfilePage;
