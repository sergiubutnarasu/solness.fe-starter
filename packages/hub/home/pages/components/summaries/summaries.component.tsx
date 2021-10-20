import React, { FunctionComponent } from 'react';
import { Box, Grid, Panel, Typography } from '@solness/ui';

const Summaries: FunctionComponent = () => (
  <Grid columns={3} spacing={8} mb={8}>
    <Grid.Item>
      <Panel title="Team" mb={0}>
        <Typography.Text fontSize="lg" fontWeight="semibold" color="purple.500">
          Core Squad
        </Typography.Text>
        <Grid columns={2}>
          <Grid.Item>
            <Typography.Text color="gray">Software Developer</Typography.Text>
          </Grid.Item>

          <Grid.Item>
            <Box ml={2} textAlign="right">
              <Typography.Text fontSize="small" color="gray">
                5 member
              </Typography.Text>
            </Box>
          </Grid.Item>
        </Grid>
      </Panel>
    </Grid.Item>

    <Grid.Item>
      <Panel title="Documents" mb={0}>
        <Typography.Text fontSize="large" fontWeight="semibold">
          16 documents
        </Typography.Text>
        <Typography.Text color="gray">Confidential</Typography.Text>
      </Panel>
    </Grid.Item>

    <Grid.Item>
      <Panel title="Inventory" mb={0}>
        <Typography.Text fontSize="lg" fontWeight="semibold">
          9 items available
        </Typography.Text>
        <Typography.Text color="gray">No item requested</Typography.Text>
      </Panel>
    </Grid.Item>
  </Grid>
);

export default Summaries;
