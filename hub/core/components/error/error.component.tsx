import { NetworkStatusCode } from '@solness/network/config';
import { Alert, Box } from '@solness/ui';
import { ErrorTitleMapping } from './config';

interface Props {
  code?: NetworkStatusCode;
}

const Error = ({ code }: Props) => {
  const title = code ? ErrorTitleMapping[code] : 'Oops! Something went wrong!';

  return (
    <Box p={6} mb={6} borderRadius="md" boxShadow="sm">
      <Alert
        status="error"
        bg="transparent"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        paddingY={16}
      >
        <Alert.Icon boxSize="40px" mr={0} />
        <Alert.Title mt={4} mb={4} fontSize="lg">
          {title}
        </Alert.Title>
        <Alert.Description>
          We are trying to offer you the best experience with our application.
        </Alert.Description>
        <Alert.Description>Please try again later.</Alert.Description>
      </Alert>
    </Box>
  );
};

export default Error;
