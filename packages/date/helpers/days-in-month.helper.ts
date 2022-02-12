import dayjs from 'dayjs';

export const daysInMonth = (date: Date) => {
  return dayjs(date).daysInMonth();
};
