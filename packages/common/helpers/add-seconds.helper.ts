import moment from 'moment';

export const addSeconds = (value: number, format?: string) =>
  moment().add(value, 's').format(format);
