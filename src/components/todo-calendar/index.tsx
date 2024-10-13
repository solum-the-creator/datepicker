import { useState } from "react";
import { Calendar } from "@components/calendar";
import { Holiday } from "@customTypes/holidays";

import { TodosProvider } from "@/shared/context/todosContext";
import { withTodoLogic } from "@/shared/hoc/withTodoLogic";

type TodoCalendarProps = {
  minDate?: Date;
  maxDate?: Date;
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
};

export const TodoCalendar: React.FC<TodoCalendarProps> = ({ ...props }) => {
  const [date, setDate] = useState<Date>();

  const CalendarWithTodoLogic = withTodoLogic(Calendar);

  return (
    <TodosProvider>
      <CalendarWithTodoLogic value={date} onDateSelect={setDate} {...props} />
    </TodosProvider>
  );
};
