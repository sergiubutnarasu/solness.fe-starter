import { Box, Button, LabelValue, Tooltip } from '@solness/ui';

type Props = {
  email: string;
};

const SecurityForm = ({ email }: Props) => {
  return (
    <>
      <LabelValue stripped label="Email Address">
        {email}
      </LabelValue>

      <Box mt={4}>
        <Tooltip
          label="This action will be available soon"
          placement="top"
          display="inline-block"
          mr={2}
        >
          <Button disabled>Change email address</Button>
        </Tooltip>
        <Button>Change password</Button>
      </Box>
    </>
  );
};

export default SecurityForm;
