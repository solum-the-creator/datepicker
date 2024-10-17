import { useMemo } from "react";
import { Calendar } from "@components/calendar";
import { Holiday } from "@customTypes/holidays";

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
};

export const TodoCalendar: React.FC<TodoCalendarProps> = ({ ...props }) => {
  const CalendarWithTodoLogic = useMemo(() => withTodoLogic(Calendar), []);

  return <CalendarWithTodoLogic {...props} />;
};
