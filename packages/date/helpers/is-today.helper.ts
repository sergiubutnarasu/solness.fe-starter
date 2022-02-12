import dayjs from 'dayjs';

export const isToday = (date: Date) => {
  const today = dayjs().startOf('day');
  const currentDate = dayjs(date).startOf('day');

  return today.isSame(currentDate);
};
