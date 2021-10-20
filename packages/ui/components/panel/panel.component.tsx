import React, { FunctionComponent, ReactNode } from 'react';
import { ColorType } from '../../types';
import Box, { Props as BoxProps } from '../box';
import Stack from '../stack';
import Typography from '../typography';

export type Props = BoxProps & {
  children: ReactNode;
  title: ReactNode;
  titleColor?: ColorType;
  actions?: ReactNode;
  description?: ReactNode;
};

const Panel: FunctionComponent<Props> = ({
  title,
  titleColor,
  description,
  actions,
  children,
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
        <Typography.Title
          as="div"
          fontSize="xs"
          color={titleColor}
          fontWeight="semibold"
        >
          {title}
        </Typography.Title>

        {actions && <Stack direction="row">{actions}</Stack>}
      </Stack>

      {description && (
        <Box mt="4">
          <Typography.Text color="gray.500">{description}</Typography.Text>
        </Box>
      )}
    </Box>

    {children}
  </Box>
);

export default Panel;
