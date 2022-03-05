import { Box, Button, LabelValue, Section } from '@solness/ui';
import { useState } from 'react';
import ChangePasswordForm from '../change-password-form';

interface Props {
  email: string;
}

const SecurityForm = ({ email }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSection = () => {
    setIsVisible((value) => !value);
  };

  return (
    <>
      <Section
        title="Security"
        description="Your email address represents the key to enter in this platform to
        simplify the login process."
      >
        <>
          <LabelValue stripped label="Email Address">
            {email}
          </LabelValue>

          <Box mt={4}>
            {!isVisible && (
              <Button onClick={toggleSection}>Change password</Button>
            )}
          </Box>
        </>
      </Section>

      {isVisible && (
        <Section title="Change password">
          <ChangePasswordForm
            onCancel={toggleSection}
            onSuccess={toggleSection}
          />
        </Section>
      )}
    </>
  );
};

export default SecurityForm;
