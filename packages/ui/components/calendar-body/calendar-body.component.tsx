import { addMonths, isSame, isToday } from 'packages/date';
import CalendarItem from '../calendar-item';
import Grid from '../grid';
import { useGetViewerDates } from './hooks';

type Props = {
  value: Date;
  viewerDate: Date;
  onSelect: (date: Date) => void;
};

const CalendarBody = ({ value, viewerDate, onSelect }: Props) => {
  const { previousDays, currentDays, nextDays } = useGetViewerDates(viewerDate);

  const handlePreviousMonthSelect = (day: number) => {
    const date = addMonths(viewerDate, -1);
    onSelect(new Date(date.getFullYear(), date.getMonth(), day));
  };

  const handleCurrentMonthSelect = (day: number) => {
    onSelect(new Date(viewerDate.getFullYear(), viewerDate.getMonth(), day));
  };

  const handleNextMonthSelect = (day: number) => {
    const date = addMonths(viewerDate, 1);
    onSelect(new Date(date.getFullYear(), date.getMonth(), day));
  };

  const checkToday = (day: number) => {
    const date = new Date(viewerDate.getFullYear(), viewerDate.getMonth(), day);

    return isToday(date);
  };

  const checkSelected = (
    day: number,
    {
      isPrevious = false,
      isNext = false,
    }: Partial<{ isPrevious?: boolean; isNext?: boolean }> = {},
  ) => {
    let date = viewerDate;

    if (isPrevious) {
      date = addMonths(viewerDate, -1);
    }

    if (isNext) {
      date = addMonths(viewerDate, 1);
    }

    let checkedDate = new Date(date.getFullYear(), date.getMonth(), day);

    return isSame(value, checkedDate);
  };

  return (
    <Grid columns={7} gap={1} alignItems="center">
      {previousDays?.map((day, index) => (
        <CalendarItem
          key={`prev-${index}`}
          notCurrentMonth
          day={day}
          isSelected={checkSelected(day, { isPrevious: true })}
          onSelect={handlePreviousMonthSelect}
        />
      ))}

      {currentDays?.map((day, index) => (
        <CalendarItem
          key={`current-${index}`}
          day={day}
          isToday={checkToday(day)}
          isSelected={checkSelected(day)}
          onSelect={handleCurrentMonthSelect}
        />
      ))}

      {nextDays?.map((day, index) => (
        <CalendarItem
          key={`next-${index}`}
          notCurrentMonth
          day={day}
          isSelected={checkSelected(day, { isNext: true })}
          onSelect={handleNextMonthSelect}
        />
      ))}
    </Grid>
  );
};

export default CalendarBody;
