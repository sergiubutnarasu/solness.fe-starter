import React, { FunctionComponent, ReactNode } from 'react';
import { ColorType } from '../../types';
import Box, { Props as BoxProps } from '../box';
import Grid from '../grid';
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
  direction?: 'row' | 'column';
  leftColSpan?: number;
  rightColSpan?: number;
}

const Section: FunctionComponent<Props> = ({
  title,
  titleColor,
  description,
  actions,
  children,
  paddingBottom = 8,
  marginBottom = 8,
  loading,
  direction = 'column',
  leftColSpan = 5,
  rightColSpan = 7,
  ...props
}) => {
  const calculatedLeftColSpan = direction === 'row' ? 12 : leftColSpan;
  const calculatedRightColSpan = direction === 'row' ? 12 : rightColSpan;

  return (
    <Grid
      spacing={4}
      pb={paddingBottom}
      mb={marginBottom}
      borderBottomWidth={1}
      borderColor="gray.100"
      {...props}
      _last={{ mb: 0, borderBottomWidth: 0, pb: 0 }}
    >
      <Grid.Item colSpan={calculatedLeftColSpan}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
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
      </Grid.Item>

      <Grid.Item colSpan={calculatedRightColSpan}>
        <Skeleton.Text isLoaded={!loading} noOfLines={5}>
          {children}
        </Skeleton.Text>
      </Grid.Item>
    </Grid>
  );
};

export default Section;
