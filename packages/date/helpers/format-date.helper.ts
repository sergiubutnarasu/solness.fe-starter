import dayjs from 'dayjs';
import { DEFAULT_FORMAT } from '../config';

export const formatDate = (date?: string | Date, format = DEFAULT_FORMAT) =>
  dayjs(date).format(format);
