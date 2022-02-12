import dayjs from 'dayjs';

export const lastDayOfMonthInTheWeek = (date: Date) =>
  dayjs(date).endOf('month').day();
