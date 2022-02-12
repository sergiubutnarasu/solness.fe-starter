import {
  addMonths,
  daysInMonth,
  firstDayOfMonthInTheWeek,
  lastDayOfMonthInTheWeek,
} from '@solness/date';
import { useMemo } from 'react';

export const useGetViewerDates = (viewerDate: Date) => {
  return useMemo(() => {
    const previousMonth = addMonths(viewerDate, -1);
    const lastPreviousMonthDays = daysInMonth(previousMonth);
    const currentMonthDays = daysInMonth(viewerDate);
    const firstDayInTheWeek = firstDayOfMonthInTheWeek(viewerDate);
    const lastDayInTheWeek = lastDayOfMonthInTheWeek(viewerDate);

    const previousDays: number[] = [];
    const currentDays: number[] = [];
    const nextDays: number[] = [];

    for (let i = 1; i <= firstDayInTheWeek; i++) {
      previousDays.push(lastPreviousMonthDays - firstDayInTheWeek + i);
    }

    for (let i = 1; i <= currentMonthDays; i++) {
      currentDays.push(i);
    }

    for (let i = 1; i < 7 - lastDayInTheWeek; i++) {
      nextDays.push(i);
    }

    return {
      previousDays,
      currentDays,
      nextDays,
    };
  }, [viewerDate]);
};
