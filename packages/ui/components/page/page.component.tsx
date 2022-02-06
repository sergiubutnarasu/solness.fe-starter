import React, { FunctionComponent, ReactNode } from 'react';
import Box, { Props as BoxProps } from '../box';
import Skeleton from '../skeleton';
import Stack from '../stack';
import Typography from '../typography';

export type Props = BoxProps & {
  children: ReactNode;
  title: ReactNode;
  actions?: ReactNode;
  description?: ReactNode;
  loading?: boolean;
};

const Page: FunctionComponent<Props> = ({
  title,
  description,
  actions,
  children,
  loading,
  ...rest
}) => (
  <Box padding={8} borderRadius="md" boxShadow="sm" _last={{ mb: 0 }} {...rest}>
    <Box pb={6} mb={8} borderBottom="1px" borderColor="gray.100">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Skeleton.Text minWidth="50%" isLoaded={!loading} noOfLines={1}>
          <Typography.Title as="h1" fontSize="2xl">
            {title}
          </Typography.Title>
        </Skeleton.Text>

        <Skeleton isLoaded={!loading}>{actions && <>{actions}</>}</Skeleton>
      </Stack>

      {description && (
        <Box mt="2">
          <Skeleton.Text isLoaded={!loading} noOfLines={2}>
            <Typography.Text color="gray.500">{description}</Typography.Text>
          </Skeleton.Text>
        </Box>
      )}
    </Box>

    <Skeleton.Text isLoaded={!loading} noOfLines={10}>
      {children}
    </Skeleton.Text>
  </Box>
);

export default Page;
