import { PropsWithChildren, ReactNode, useMemo } from 'react';
import Grid, { Props as GridProps } from '../grid';
import Typography from '../typography';

interface Props extends GridProps {
  label: ReactNode;
  stripped?: boolean;
}

const LabelValue = ({
  children,
  label,
  stripped = false,
  ...props
}: PropsWithChildren<Props>) => {
  const backgroundColor = stripped ? 'gray.50' : undefined;

  const labelContent = useMemo(() => {
    if (typeof label === 'string') {
      return <Typography.Text color="gray.500">{label}</Typography.Text>;
    }

    return label;
  }, [label]);

  const valueContent = useMemo(() => {
    if (typeof children === 'string') {
      return <Typography.Text>{children}</Typography.Text>;
    }

    return children;
  }, [children]);

  return (
    <Grid
      bgColor={backgroundColor}
      alignItems="center"
      px={4}
      py={3}
      spacing={4}
      borderRadius={8}
      {...props}
    >
      <Grid.Item colSpan={4}>{labelContent}</Grid.Item>
      <Grid.Item colSpan={8}>{valueContent}</Grid.Item>
    </Grid>
  );
};

export default LabelValue;
