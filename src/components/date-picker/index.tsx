import { useMemo } from "react";
import { Calendar } from "@components/calendar";
import { Holiday } from "@customTypes/holidays";

import { withPickerLogic } from "@/shared/hoc/with-picker-logic/withPickerLogic";

type BaseCalendarProps = {
  value?: Date;
  onDateSelect?: (date?: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  label?: string;
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
};

export const DatePicker: React.FC<BaseCalendarProps> = ({ ...props }) => {
  const CalendarWithPickerLogic = useMemo(() => withPickerLogic(Calendar), []);

  return <CalendarWithPickerLogic {...props} />;
};
