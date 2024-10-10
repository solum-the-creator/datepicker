import { useState } from "react";
import { Calendar } from "@components/calendar";

import { withPickerLogic } from "@/shared/hoc/with-picker-logic/withPickerLogic";
import { withCalendarLogic } from "@/shared/hoc/withCalendarLogic";

const CalendarWithLogic = withCalendarLogic(Calendar);
export const CalendarWithPickerLogic = withPickerLogic(CalendarWithLogic);

type BaseCalendarProps = {
  value?: Date;
  onSelect?: (value: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
};

export const BaseCalendarWithPicker: React.FC<BaseCalendarProps> = () => {
  const [value, setValue] = useState<Date | undefined>(undefined);

  return (
    <CalendarWithPickerLogic
      value={value}
      onSelect={setValue}
      startWeekOnSunday={false}
      highlightHolidays={true}
      highlightWeekends={true}
      minDate={new Date(2024, 8, 1)}
      maxDate={new Date(2024, 10, 20)}
    />
  );
};
