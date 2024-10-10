import { useState } from "react";
import { Calendar } from "@components/calendar";
import { withCalendarLogic } from "@components/hoc/withCalendarLogic";
import { withTodoLogic } from "@components/hoc/withTodoLogic";

const CalendarWithLogic = withCalendarLogic(Calendar);
const CalendarWithTodoLogic = withTodoLogic(CalendarWithLogic);

export const TodoCalendar: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return <CalendarWithTodoLogic value={date} onSelect={setDate} />;
};
