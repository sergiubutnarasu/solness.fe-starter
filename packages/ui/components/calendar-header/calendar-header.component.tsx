import { MONTHS } from '../../configs';
import Button from '../button';
import Grid from '../grid';
import Typography from '../typography';

type Props = {
  value: Date;
  onPreviousClick: () => void;
  onNextClick: () => void;
};

const CalendarHeader = ({ value, onPreviousClick, onNextClick }: Props) => {
  const month = MONTHS[value.getMonth()];
  const year = value.getFullYear();

  return (
    <Grid columns={7} gap={1} alignItems="center" mb={2}>
      <Grid.Item display="flex" gap={1} colSpan={4}>
        <Typography.Text fontSize="md" fontWeight="semibold">
          {month}
        </Typography.Text>
        <Typography.Text fontSize="md" textColor="gray.500">
          {year}
        </Typography.Text>
      </Grid.Item>

      <Grid.Item colSpan={3} textAlign="right">
        <Button.Icon
          variant="ghost"
          size="sm"
          icon="left"
          aria-label="Previous month"
          onClick={onPreviousClick}
        />
        <Button.Icon
          variant="ghost"
          size="sm"
          icon="right"
          aria-label="Next month"
          onClick={onNextClick}
        />
      </Grid.Item>
    </Grid>
  );
};

export default CalendarHeader;
