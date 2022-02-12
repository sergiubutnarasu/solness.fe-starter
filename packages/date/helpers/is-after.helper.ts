import dayjs from 'dayjs';

export const isAfter = (date: string) => dayjs().isAfter(date);
