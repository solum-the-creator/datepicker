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

export const BaseCalendar: React.FC<BaseCalendarProps> = ({ ...props }) => {
  const [value, setValue] = useState<Date>();
  return <Calendar value={value} onDateSelect={setValue} {...props} />;
};
