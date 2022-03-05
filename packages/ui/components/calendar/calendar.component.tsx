import { addMonths } from '@solness/date';
import { useEffect, useRef, useState } from 'react';
import CalendarBody from '../calendar-body';
import CalendarHeader from '../calendar-header';
import CalendarSubheader from '../calendar-subheader';

interface Props {
  value?: Date;
  onSelect?: (date: Date) => void;
}

const Calendar = ({ value, onSelect }: Props) => {
  const today = useRef(new Date());
  const [selectedDate, setSelectedDate] = useState(value ?? today.current);
  const [viewerDate, setViewerDate] = useState(selectedDate);

  useEffect(() => {
    const newValue = value ?? today.current;
    setSelectedDate(newValue);
    setViewerDate(newValue);
  }, [value]);

  const handlePreviousClick = () => {
    const newDate = addMonths(viewerDate, -1);
    setViewerDate(newDate);
  };

  const handleNextClick = () => {
    const newDate = addMonths(viewerDate, 1);
    setViewerDate(newDate);
  };

  const handleSelect = (newValue: Date) => {
    setSelectedDate(newValue);
    onSelect?.(newValue);
  };

  return (
    <>
      <CalendarHeader
        value={viewerDate}
        onPreviousClick={handlePreviousClick}
        onNextClick={handleNextClick}
      />
      <CalendarSubheader />
      <CalendarBody
        value={selectedDate}
        viewerDate={viewerDate}
        onSelect={handleSelect}
      />
    </>
  );
};

export default Calendar;
