import { useState } from "react";
import { Calendar } from "@components/calendar";
import { Holiday } from "@customTypes/holidays";

import { withPickerLogic } from "@/shared/hoc/with-picker-logic/withPickerLogic";

export const CalendarWithPickerLogic = withPickerLogic(Calendar);

type BaseCalendarProps = {
  minDate?: Date;
  maxDate?: Date;
  label?: string;
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
};

export const BaseCalendarWithPicker: React.FC<BaseCalendarProps> = ({ ...props }) => {
  const [value, setValue] = useState<Date | undefined>(undefined);

  return <CalendarWithPickerLogic value={value} onDateSelect={setValue} {...props} />;
};
