import { useMemo } from "react";
import { Calendar } from "@components/calendar";
import { Holiday } from "@customTypes/holidays";
import { Theme } from "@styles/theme";

import { ThemeWrapper } from "@/shared/components/theme-wrapper";
import { withPickerLogic } from "@/shared/hoc/with-picker-logic/withPickerLogic";

export type DatePickerProps = {
  value?: Date;
  onDateSelect?: (date?: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  label?: string;
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
  theme?: Partial<Theme>;
};

const DatePicker: React.FC<DatePickerProps> = ({ theme, ...props }) => {
  const CalendarWithPickerLogic = useMemo(() => withPickerLogic(Calendar), []);

  return (
    <ThemeWrapper theme={theme}>
      <CalendarWithPickerLogic {...props} />
    </ThemeWrapper>
  );
};

export default DatePicker;
