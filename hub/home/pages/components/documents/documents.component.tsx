import React, { FunctionComponent } from 'react';
import { Button, Grid, Panel, Typography } from '@solness/ui';

const Documents: FunctionComponent = () => (
  <Panel
    mb={0}
    title="Documents"
    actions={
      <>
        <Button.Icon
          aria-label="Add new document"
          icon="plus"
          colorScheme="purple"
          size="sm"
        />
        <Button.Icon
          aria-label="Download documents"
          icon="download"
          colorScheme="purple"
          size="sm"
        />
      </>
    }
  >
    <>
      <Grid
        columns={12}
        bgColor="gray.50"
        px={4}
        py={2}
        borderRadius={8}
        alignItems="center"
      >
        <Grid.Item colSpan={6}>
          <Typography.Text>Holidays.doc</Typography.Text>
        </Grid.Item>
        <Grid.Item colSpan={4}>
          <Typography.Text color="gray">by Sergiu Butnarasu</Typography.Text>
        </Grid.Item>
        <Grid.Item colSpan={1}>
          <Typography.Text color="gray">1.4 MB</Typography.Text>
        </Grid.Item>
        <Grid.Item textAlign="right">
          <Button.Icon
            variant="ghost"
            aria-label="View details"
            icon="dots"
            size="sm"
            color="gray"
          />
        </Grid.Item>
      </Grid>

      <Grid columns={12} px={4} py={2} borderRadius={8} alignItems="center">
        <Grid.Item colSpan={6}>
          <Typography.Text>Design System.pdf</Typography.Text>
        </Grid.Item>
        <Grid.Item colSpan={4}>
          <Typography.Text color="gray">by June Cha</Typography.Text>
        </Grid.Item>
        <Grid.Item colSpan={1}>
          <Typography.Text color="gray">8.6 MB</Typography.Text>
        </Grid.Item>
        <Grid.Item textAlign="right">
          <Button.Icon
            variant="ghost"
            aria-label="View details"
            icon="dots"
            size="sm"
            color="gray"
          />
        </Grid.Item>
      </Grid>

      <Grid
        columns={12}
        bgColor="gray.50"
        px={4}
        py={2}
        borderRadius={8}
        alignItems="center"
      >
        <Grid.Item colSpan={6}>
          <Typography.Text>Refactoring.doc</Typography.Text>
        </Grid.Item>
        <Grid.Item colSpan={4}>
          <Typography.Text color="gray">by Oscar Thomsen</Typography.Text>
        </Grid.Item>
        <Grid.Item colSpan={1}>
          <Typography.Text color="gray">0.8 MB</Typography.Text>
        </Grid.Item>
        <Grid.Item textAlign="right">
          <Button.Icon
            variant="ghost"
            aria-label="View details"
            icon="dots"
            size="sm"
            color="gray"
          />
        </Grid.Item>
      </Grid>

      <Grid columns={12} px={4} py={2} borderRadius={8} alignItems="center">
        <Grid.Item colSpan={6}>
          <Typography.Text>Guidelines.doc</Typography.Text>
        </Grid.Item>
        <Grid.Item colSpan={4}>
          <Typography.Text color="gray">by Renee Sims</Typography.Text>
        </Grid.Item>
        <Grid.Item colSpan={1}>
          <Typography.Text color="gray">2.1 MB</Typography.Text>
        </Grid.Item>
        <Grid.Item textAlign="right">
          <Button.Icon
            variant="ghost"
            aria-label="View details"
            icon="dots"
            size="sm"
            color="gray"
          />
        </Grid.Item>
      </Grid>

      <Grid
        columns={12}
        bgColor="gray.50"
        px={4}
        py={2}
        borderRadius={8}
        alignItems="center"
      >
        <Grid.Item colSpan={6}>
          <Typography.Text>Retro.xlsx</Typography.Text>
        </Grid.Item>
        <Grid.Item colSpan={4}>
          <Typography.Text color="gray">by Lucrecia Calder</Typography.Text>
        </Grid.Item>
        <Grid.Item colSpan={1}>
          <Typography.Text color="gray">2.4 MB</Typography.Text>
        </Grid.Item>
        <Grid.Item textAlign="right">
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

export default Documents;
