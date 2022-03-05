import { add } from './add.helper';

export const addMonths = (value: Date, months: number) =>
  add(value, months, 'month');
