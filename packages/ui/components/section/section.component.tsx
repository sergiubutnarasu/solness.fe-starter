import React, { FunctionComponent, ReactNode } from 'react';
import { ColorType } from '../../types';
import Box, { Props as BoxProps } from '../box';
import Skeleton from '../skeleton';
import Stack from '../stack';
import Typography from '../typography';

export type Props = BoxProps & {
  children: ReactNode;
  title: ReactNode;
  titleColor?: ColorType;
  actions?: ReactNode;
  description?: ReactNode;
  loading?: boolean;
};

const Section: FunctionComponent<Props> = ({
  title,
  titleColor,
  description,
  actions,
  children,
  padding = 6,
  marginBottom = 8,
  loading,
  ...props
}) => (
  <Box pb={8} mb={marginBottom} borderBottomWidth={1} {...props}>
    <Box mb="4" bgColor="transparent">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Skeleton.Text minWidth="50%" isLoaded={!loading} noOfLines={2}>
          <Typography.Title
            as="div"
            fontSize="sm"
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

      {!loading && description && (
        <Box mt="2">
          <Typography.Text color="gray.500">{description}</Typography.Text>
        </Box>
      )}
    </Box>

    <Skeleton.Text isLoaded={!loading} noOfLines={5}>
      {children}
    </Skeleton.Text>
  </Box>
);

export default Section;
