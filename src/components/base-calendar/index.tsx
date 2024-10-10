import { useState } from "react";
import { Calendar } from "@components/calendar";

import { Holiday } from "@/shared/types/holidays";

type BaseCalendarProps = {
  minDate?: Date;
  maxDate?: Date;
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
};

export const BaseCalendar: React.FC<BaseCalendarProps> = () => {
  const [value, setValue] = useState<Date | undefined>(new Date());
  return (
    <Calendar
      value={value}
      onDateSelect={setValue}
      startWeekOnSunday={false}
      highlightHolidays={true}
      highlightWeekends={true}
      minDate={new Date(2024, 9, 1)}
      maxDate={new Date(2024, 9, 20)}
    />
  );
};
