import { Box, Grid, Skeleton, Stack } from '@solness/ui';

const UserDetailsSection = () => (
  <>
    <Box>
      <Box width="45%" mb="8">
        <Skeleton.Text noOfLines={2} />
      </Box>

      <Grid spacing={8}>
        <Grid.Item colSpan={6}>
          <Box width="50%" mb="3">
            <Skeleton.Text noOfLines={1} />
          </Box>

          <Skeleton height="10" />
        </Grid.Item>

        <Grid.Item colSpan={6}>
          <Box width="50%" mb="3">
            <Skeleton.Text noOfLines={1} />
          </Box>

          <Skeleton height="10" />
        </Grid.Item>
      </Grid>
    </Box>

    <Box py={8}>
      <hr />
    </Box>
  </>
);

export const UserDetailsLoader = () => (
  <>
    <UserDetailsSection />
    <UserDetailsSection />

    <Stack direction="row" justifyContent="flex-end">
      <Skeleton height="10" width="8rem" />
    </Stack>
  </>
);
