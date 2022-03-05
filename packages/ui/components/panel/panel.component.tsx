import React, { FunctionComponent, ReactNode } from 'react';
import { ColorType } from '../../types';
import Box, { Props as BoxProps } from '../box';
import Skeleton from '../skeleton';
import Stack from '../stack';
import Typography from '../typography';

export interface Props extends Omit<BoxProps, 'title'> {
  children: ReactNode;
  title: ReactNode;
  titleColor?: ColorType;
  actions?: ReactNode;
  description?: ReactNode;
  loading?: boolean;
}

const Panel: FunctionComponent<Props> = ({
  title,
  titleColor,
  description,
  actions,
  children,
  loading,
  padding = 6,
  marginBottom = 6,
  borderRadius = 'md',
  boxShadow = 'sm',
  ...props
}) => (
  <Box
    p={padding}
    mb={marginBottom}
    borderRadius={borderRadius}
    boxShadow={boxShadow}
    {...props}
  >
    <Box mb="4" bgColor="transparent">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Skeleton.Text minWidth="50%" isLoaded={!loading} noOfLines={2}>
          <Typography.Title
            as="div"
            fontSize="xs"
            color={titleColor}
            fontWeight="semibold"
          >
            {title}
          </Typography.Title>
        </Skeleton.Text>

        <Skeleton isLoaded={!loading}>
          {actions && <Stack direction="row">{actions}</Stack>}
        </Skeleton>
      </Stack>

      {description && (
        <Box mt="4">
          <Skeleton.Text isLoaded={!loading} noOfLines={1}>
            <Typography.Text color="gray.500">{description}</Typography.Text>
          </Skeleton.Text>
        </Box>
      )}
    </Box>

    <Skeleton.Text isLoaded={!loading} noOfLines={5}>
      {children}
    </Skeleton.Text>
  </Box>
);

export default Panel;
