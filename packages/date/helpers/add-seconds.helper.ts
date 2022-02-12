import dayjs from 'dayjs';

export const addSeconds = (value: number, format?: string) =>
  dayjs().add(value, 's').format(format);
