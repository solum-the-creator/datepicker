import { useEffect, useState } from "react";

export const useCalendarDate = (value?: Date) => {
  const currentDate = value || new Date();

  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  useEffect(() => {
    setCurrentMonth(currentDate.getMonth());
    setCurrentYear(currentDate.getFullYear());
  }, [value]);

  const handleMonthYearChange = (newMonth: number, newYear: number) => {
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  return { currentMonth, currentYear, handleMonthYearChange };
};
