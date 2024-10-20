import { Calendar } from "@components/calendar";
import { Theme } from "@styles/theme";

import { ThemeWrapper } from "@/shared/components/theme-wrapper";
import { Holiday } from "@/shared/types/holidays";

export type BaseCalendarProps = {
  value?: Date;
  onDateSelect?: (date?: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
  theme?: Partial<Theme>;
};

const BaseCalendar: React.FC<BaseCalendarProps> = ({ theme, ...props }) => {
  return (
    <ThemeWrapper theme={theme}>
      <Calendar {...props} />
    </ThemeWrapper>
  );
};

export default BaseCalendar;
