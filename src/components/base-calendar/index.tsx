import { useState } from "react";
import { Calendar } from "@components/calendar";

import { withCalendarLogic } from "@/shared/hoc/withCalendarLogic";
import { Holiday } from "@/shared/types/holidays";

type BaseCalendarProps = {
  minDate?: Date;
  maxDate?: Date;
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
};

const CalendarWithLogic = withCalendarLogic(Calendar);

export const BaseCalendar: React.FC<BaseCalendarProps> = () => {
  const [value, setValue] = useState<Date | undefined>(new Date());
  return (
    <CalendarWithLogic
      value={value}
      onSelect={setValue}
      startWeekOnSunday={false}
      highlightHolidays={true}
      highlightWeekends={true}
      minDate={new Date(2024, 9, 1)}
      maxDate={new Date(2024, 9, 20)}
    />
  );
};
