import dayjs from 'dayjs';

export const add = (
  date: string | Date,
  value: number,
  unit?: dayjs.ManipulateType,
) => dayjs(date).add(value, unit).toDate();
