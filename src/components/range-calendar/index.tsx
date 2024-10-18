import { useMemo } from "react";
import { Calendar } from "@components/calendar";
import { Holiday } from "@customTypes/holidays";
import { Theme } from "@styles/theme";

import { ThemeWrapper } from "@/shared/components/theme-wrapper";
import { withRangeLogic } from "@/shared/hoc/with-range-logic/withRangeLogic";

type RangeCalendarProps = {
  rangeStart?: Date;
  rangeEnd?: Date;
  onRangeSelect?: (start?: Date, end?: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  labelStart?: string;
  labelEnd?: string;
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
  theme?: Partial<Theme>;
};

export const RangeCalendar: React.FC<RangeCalendarProps> = ({ theme, ...props }) => {
  const CalendarWithRangeLogic = useMemo(() => withRangeLogic(Calendar), []);

  return (
    <ThemeWrapper theme={theme}>
      <CalendarWithRangeLogic {...props} />
    </ThemeWrapper>
  );
};
