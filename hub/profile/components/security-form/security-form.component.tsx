import { Box, Button, LabelValue, Tooltip } from '@solness/ui';

const SecurityForm = () => {
  return (
    <>
      <LabelValue stripped label="Email Address">
        sergiu@butnarasu.ro
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
