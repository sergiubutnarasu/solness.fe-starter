import React, { FunctionComponent, ReactNode } from 'react';
import Box, { Props as BoxProps } from '../box';
import Stack from '../stack';
import Typography from '../typography';

export type Props = BoxProps & {
  children: ReactNode;
  title: ReactNode;
  actions?: ReactNode;
  description?: ReactNode;
};

const Page: FunctionComponent<Props> = ({
  title,
  description,
  actions,
  children,
  ...rest
}) => (
  <Box padding="6" borderRadius="md" boxShadow="sm" {...rest}>
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
