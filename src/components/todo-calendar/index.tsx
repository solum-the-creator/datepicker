import { useState } from "react";
import { Calendar } from "@components/calendar";
import { Holiday } from "@customTypes/holidays";

import { withTodoLogic } from "@/shared/hoc/withTodoLogic";

type TodoCalendarProps = {
  minDate?: Date;
  maxDate?: Date;
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
};

const CalendarWithTodoLogic = withTodoLogic(Calendar);

export const TodoCalendar: React.FC<TodoCalendarProps> = ({ ...props }) => {
  const [date, setDate] = useState<Date>();

  return <CalendarWithTodoLogic value={date} onDateSelect={setDate} {...props} />;
};
