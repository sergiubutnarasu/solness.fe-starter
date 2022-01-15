import Grid from '../grid';
import Skeleton from '../skeleton';

const ListLoader = () => (
  <>
    {Array.from({ length: 10 }).map((_, index) => {
      const color = index % 2 ? undefined : 'gray.50';

      return (
        <Grid
          key={index}
          px={4}
          py={2}
          bgColor={color}
          spacing={4}
          alignItems="center"
          borderRadius={8}
        >
          <Grid.Item colSpan={4}>
            <Skeleton height={2} my="3" />
          </Grid.Item>
          <Grid.Item colSpan={2}>
            <Skeleton height={2} my="3" />
          </Grid.Item>
          <Grid.Item colSpan={4}>
            <Skeleton height={2} my="3" />
          </Grid.Item>
          <Grid.Item colSpan={2} textAlign="right">
            <Skeleton height={2} my="3" />
          </Grid.Item>
        </Grid>
      );
    })}
  </>
);

export default ListLoader;
