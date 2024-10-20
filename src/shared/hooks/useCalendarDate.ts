import { useEffect, useState } from "react";

export const useCalendarDate = (value?: Date, rangeStart?: Date, rangeEnd?: Date) => {
  const currentDate = value || rangeStart || new Date();

  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  useEffect(() => {
    if (value) {
      setCurrentMonth(value.getMonth());
      setCurrentYear(value.getFullYear());
    }
  }, [value]);

  useEffect(() => {
    if (rangeStart) {
      setCurrentMonth(rangeStart.getMonth());
      setCurrentYear(rangeStart.getFullYear());
    }
  }, [rangeStart]);

  useEffect(() => {
    if (rangeEnd) {
      setCurrentMonth(rangeEnd.getMonth());
      setCurrentYear(rangeEnd.getFullYear());
    }
  }, [rangeEnd]);

  const handleMonthYearChange = (newMonth: number, newYear: number) => {
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  return { currentMonth, currentYear, handleMonthYearChange };
};
