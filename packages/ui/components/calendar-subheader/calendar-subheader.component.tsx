import { DAYS } from '../../configs';
import Grid from '../grid';
import Typography from '../typography';

const CalendarSubheader = () => (
  <Grid columns={7} gap={1} mb={2}>
    {DAYS.map((day) => (
      <Grid.Item key={day} textAlign="center">
        <Typography.Text fontSize="xs" fontWeight="semibold">
          {day}
        </Typography.Text>
      </Grid.Item>
    ))}
  </Grid>
);

export default CalendarSubheader;
