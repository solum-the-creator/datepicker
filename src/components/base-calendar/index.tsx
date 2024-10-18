import { useState } from "react";
import { Calendar } from "@components/calendar";
import { Theme } from "@styles/theme";

import { ThemeWrapper } from "@/shared/components/theme-wrapper";
import { Holiday } from "@/shared/types/holidays";

type BaseCalendarProps = {
  minDate?: Date;
  maxDate?: Date;
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
  theme?: Partial<Theme>;
};

export const BaseCalendar: React.FC<BaseCalendarProps> = ({ theme, ...props }) => {
  const [value, setValue] = useState<Date>();

  return (
    <ThemeWrapper theme={theme}>
      <Calendar value={value} onDateSelect={setValue} {...props} />
    </ThemeWrapper>
  );
};
