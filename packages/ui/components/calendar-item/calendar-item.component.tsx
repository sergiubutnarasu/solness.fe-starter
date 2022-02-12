import { ReactNode } from 'react';
import Button from '../button';
import Grid from '../grid';

type Props = {
  day: number;
  isSelected?: boolean;
  isToday?: boolean;
  notCurrentMonth?: boolean;
  onSelect?: (day: number) => void;
};

const CalendarItem = ({
  day,
  isSelected = false,
  isToday = false,
  notCurrentMonth,
  onSelect,
}: Props) => {
  const textColor = isSelected
    ? undefined
    : isToday
    ? 'purple.500'
    : notCurrentMonth
    ? 'gray.500'
    : undefined;
  const variant = isSelected ? undefined : 'ghost';
  const colorScheme = isSelected ? 'purple' : undefined;

  const handleClick = () => onSelect?.(day);

  return (
    <Grid.Item display="flex" justifyContent="center" alignItems="center">
      <Button
        rounded="50%"
        size="sm"
        variant={variant}
        textColor={textColor}
        colorScheme={colorScheme}
        onClick={handleClick}
      >
        {day}
      </Button>
    </Grid.Item>
  );
};

export default CalendarItem;
