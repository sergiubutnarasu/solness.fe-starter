import dayjs from 'dayjs';

export const isSame = (firstDate: Date, secondDate: Date) => {
  const dayOne = dayjs(firstDate).startOf('day');
  const dayTwo = dayjs(secondDate).startOf('day');

  return dayjs(dayOne).isSame(dayTwo);
};
