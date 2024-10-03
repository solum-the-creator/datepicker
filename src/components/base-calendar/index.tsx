import { useState } from "react";
import { Calendar } from "@components/calendar";

type BaseCalendarProps = {
  startWeekOnSunday?: boolean;
};

export const BaseCalendar: React.FC<BaseCalendarProps> = ({ startWeekOnSunday = true }) => {
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
    />
  );
};
