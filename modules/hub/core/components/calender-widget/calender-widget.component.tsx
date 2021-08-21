import React, { FunctionComponent } from 'react';
import { Button, Grid, Panel, Typography } from '~/common/components';

const CalendarWidget: FunctionComponent = () => (
  <Panel
    mb={8}
    bgColor="blue.900"
    title="Next Event"
    titleColor="white"
    actions={
      <Button.Icon
        aria-label="Add event"
        variant="ghost"
        color="white"
        colorScheme="blackAlpha"
        icon="plus"
        size="sm"
      />
    }
  >
    <>
      <Grid px={4} py={2} bgColor="blue.800" borderRadius={4} mb={2}>
        <Grid.Item colSpan={4}>
          <Typography.Text color="white">10:00 AM</Typography.Text>
          <Typography.Text fontSize="xs" color="gray.500">
            24 June
          </Typography.Text>
        </Grid.Item>
        <Grid.Item colSpan={8}>
          <Typography.Text color="gray.300">
            Morning daily scrum
          </Typography.Text>
        </Grid.Item>
      </Grid>

      <Grid px={4} py={2} bgColor="blue.800" borderRadius={4} mb={2}>
        <Grid.Item colSpan={4}>
          <Typography.Text color="white">11:30 AM</Typography.Text>
          <Typography.Text fontSize="xs" color="gray.500">
            26 June
          </Typography.Text>
        </Grid.Item>
        <Grid.Item colSpan={8}>
          <Typography.Text color="gray.300">
            Sprint retrospectives
          </Typography.Text>
        </Grid.Item>
      </Grid>

      <Grid px={4} py={2} bgColor="blue.800" borderRadius={4} mb={2}>
        <Grid.Item colSpan={4}>
          <Typography.Text color="white">12:00 PM</Typography.Text>
          <Typography.Text fontSize="xs" color="gray.500">
            27 June
          </Typography.Text>
        </Grid.Item>
        <Grid.Item colSpan={8}>
          <Typography.Text color="gray.300">Sprint planning</Typography.Text>
        </Grid.Item>
      </Grid>
    </>
  </Panel>
);

export default CalendarWidget;
