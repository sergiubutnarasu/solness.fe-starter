import dayjs from 'dayjs';

export const firstDayOfMonthInTheWeek = (date: Date) =>
  dayjs(date).startOf('month').day();
