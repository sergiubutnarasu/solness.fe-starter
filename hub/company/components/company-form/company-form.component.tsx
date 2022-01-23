import { EMAIL_VALIDATION_PATTERN } from '@solness/common';
import {
  CompanyFragmentFragment,
  CompanyInput,
} from '@solness/generated-types';
import { Form, Icon, Section, Stack } from '@solness/ui';
import { useRouter } from 'next/router';
import { useUpdateCompany } from './data';

type Props = {
  company: CompanyFragmentFragment;
};

const CompanyForm = ({ company }: Props) => {
  const { push } = useRouter();

  const { updateCompany } = useUpdateCompany({
    onCompleted: () => {
      push('/organization');
    },
    onError: (error) => alert(error.message),
  });

  const handleSubmit = async ({
    name = '',
    registerNumber = '',
    slogan = '',
    description = '',
    email = '',
    phone = '',
  }: Partial<CompanyInput>) => {
    await updateCompany({
      id: company.id,
      name,
      registerNumber,
      slogan,
      description,
      email,
      phone,
    });
  };

  const handleCancel = () => push('/organization');

  return (
    <Form defaultValues={company} onSubmit={handleSubmit}>
      <Section
        title="Basic information"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. dd dd dd"
      >
        <Form.Input
          isRequired
          name="name"
          label="Organization name"
          maxLength={250}
        />
        <Form.Input
          isRequired
          name="registerNumber"
          label="Register number"
          maxLength={150}
        />
        <Form.Input name="slogan" label="Organization slogan" maxLength={250} />
      </Section>

      <Section
        title="Contact details"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      >
        <Form.Input
          isRequired
          name="email"
          label="Email address"
          maxLength={150}
          validators={{
            pattern: {
              value: EMAIL_VALIDATION_PATTERN,
              message: 'Please enter a valid email address.',
            },
          }}
          leftElement={<Icon icon="mail" color="gray.500" />}
        />

        <Form.Input
          isRequired
          name="phone"
          label="Phone number"
          maxLength={150}
          leftElement={<Icon icon="phone" color="gray.500" />}
        />
      </Section>

      <Stack direction="row" justifyContent="flex-end">
        <Form.CancelButton onClick={handleCancel}>Cancel</Form.CancelButton>
        <Form.SubmitButton>Save user</Form.SubmitButton>
      </Stack>
    </Form>
  );
};

export default CompanyForm;
