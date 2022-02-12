import dayjs from 'dayjs';

export const addMonths = (value: Date, months: number) =>
  dayjs(value).add(months, 'month').toDate();
