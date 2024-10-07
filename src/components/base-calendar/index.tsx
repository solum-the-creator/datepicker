import { useState } from "react";
import { Calendar } from "@components/calendar";
import { Holiday } from "@customTypes/holidays";

type BaseCalendarProps = {
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
};

export const BaseCalendar: React.FC<BaseCalendarProps> = ({
  startWeekOnSunday = true,
  highlightWeekends = true,
  highlightHolidays = false,
}) => {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const handleMonthChange = (month: number, year: number) => {
    setCurrentMonth(month);
    setCurrentYear(year);
  };

  return (
    <Calendar
      currentMonth={currentMonth}
      currentYear={currentYear}
      onMonthChange={handleMonthChange}
      startWeekOnSunday={startWeekOnSunday}
      highlightWeekends={highlightWeekends}
      highlightHolidays={highlightHolidays}
    />
  );
};
