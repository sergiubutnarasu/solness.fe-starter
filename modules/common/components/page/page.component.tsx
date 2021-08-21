import React, { FunctionComponent, ReactNode } from 'react';
import Box from '../box';
import Stack from '../stack';
import Typography from '../typography';

export interface Props {
  children: ReactNode;
  title: ReactNode;
  actions?: ReactNode;
  description?: ReactNode;
}

const Page: FunctionComponent<Props> = ({
  title,
  description,
  actions,
  children,
}) => (
  <Box padding="6" mb="8" borderRadius="md" boxShadow="sm">
    <Box mb="8" borderBottom="1px" borderColor="gray.100" pb="16px">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography.Title as="h1" fontSize="2xl">
          {title}
        </Typography.Title>

        {actions && <>{actions}</>}
      </Stack>

      {description && (
        <Box mt="2">
          <Typography.Text color="gray.500">{description}</Typography.Text>
        </Box>
      )}
    </Box>

    {children}
  </Box>
);

export default Page;
