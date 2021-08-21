import React, { FunctionComponent } from 'react';
import { Avatar, Button, Grid, Panel, Typography } from '~/common/components';

const TeamWidget: FunctionComponent = () => (
  <Panel title="Team Members" mb={0}>
    <>
      <Grid columns={12} mb={3} alignItems="center">
        <Grid.Item colSpan={2}>
          <Avatar
            size="sm"
            src="https://en.gravatar.com/userimage/128015720/b81c215fc33e0db0461f4974d2d2cabf.jpg?size=200"
          />
        </Grid.Item>
        <Grid.Item colSpan={8}>
          <Typography.Text fontWeight="semibold">
            Sergiu Butnarasu
          </Typography.Text>
          <Typography.Text fontSize="xs" color="gray">
            Software Developer
          </Typography.Text>
        </Grid.Item>
        <Grid.Item colSpan={2} textAlign="right">
          <Button.Icon
            variant="ghost"
            aria-label="View details"
            icon="dots"
            size="sm"
            color="gray"
          />
        </Grid.Item>
      </Grid>

      <Grid columns={12} mb={3} alignItems="center">
        <Grid.Item colSpan={2}>
          <Avatar
            size="sm"
            src="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </Grid.Item>
        <Grid.Item colSpan={8}>
          <Typography.Text fontWeight="semibold">June Cha</Typography.Text>
          <Typography.Text fontSize="xs" color="gray">
            Graphic Designer
          </Typography.Text>
        </Grid.Item>
        <Grid.Item colSpan={2} textAlign="right">
          <Button.Icon
            variant="ghost"
            aria-label="View details"
            icon="dots"
            size="sm"
            color="gray"
          />
        </Grid.Item>
      </Grid>

      <Grid columns={12} mb={3} alignItems="center">
        <Grid.Item colSpan={2}>
          <Avatar
            size="sm"
            src="https://randomuser.me/api/portraits/women/95.jpg"
          />
        </Grid.Item>
        <Grid.Item colSpan={8}>
          <Typography.Text fontWeight="semibold">
            Lucrecia Calder
          </Typography.Text>
          <Typography.Text fontSize="xs" color="gray">
            Software Developer
          </Typography.Text>
        </Grid.Item>
        <Grid.Item colSpan={2} textAlign="right">
          <Button.Icon
            variant="ghost"
            aria-label="View details"
            icon="dots"
            size="sm"
            color="gray"
          />
        </Grid.Item>
      </Grid>

      <Grid columns={12} mb={3} alignItems="center">
        <Grid.Item colSpan={2}>
          <Avatar
            size="sm"
            src="https://randomuser.me/api/portraits/men/36.jpg"
          />
        </Grid.Item>
        <Grid.Item colSpan={8}>
          <Typography.Text fontWeight="semibold">Oscar Thomsen</Typography.Text>
          <Typography.Text fontSize="xs" color="gray">
            Software Developer
          </Typography.Text>
        </Grid.Item>
        <Grid.Item colSpan={2} textAlign="right">
          <Button.Icon
            variant="ghost"
            aria-label="View details"
            icon="dots"
            size="sm"
            color="gray"
          />
        </Grid.Item>
      </Grid>

      <Grid columns={12} alignItems="center">
        <Grid.Item colSpan={2}>
          <Avatar
            size="sm"
            src="https://randomuser.me/api/portraits/women/65.jpg"
          />
        </Grid.Item>
        <Grid.Item colSpan={8}>
          <Typography.Text fontWeight="semibold">Renee Sims</Typography.Text>
          <Typography.Text fontSize="xs" color="gray">
            Web Designer
          </Typography.Text>
        </Grid.Item>
        <Grid.Item colSpan={2} textAlign="right">
          <Button.Icon
            variant="ghost"
            aria-label="View details"
            icon="dots"
            size="sm"
            color="gray"
          />
        </Grid.Item>
      </Grid>
    </>
  </Panel>
);

export default TeamWidget;
