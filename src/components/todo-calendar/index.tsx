import { useMemo } from "react";
import { Calendar } from "@components/calendar";
import { Holiday } from "@customTypes/holidays";
import { Theme } from "@styles/theme";

import { ThemeWrapper } from "@/shared/components/theme-wrapper";
import { withTodoLogic } from "@/shared/hoc/withTodoLogic";

type TodoCalendarProps = {
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

export const TodoCalendar: React.FC<TodoCalendarProps> = ({ theme, ...props }) => {
  const CalendarWithTodoLogic = useMemo(() => withTodoLogic(Calendar), []);

  return (
    <ThemeWrapper theme={theme}>
      <CalendarWithTodoLogic {...props} />
    </ThemeWrapper>
  );
};
