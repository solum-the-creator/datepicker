import { useState } from "react";
import { Calendar } from "@components/calendar";

import { withTodoLogic } from "@/shared/hoc/withTodoLogic";

const CalendarWithTodoLogic = withTodoLogic(Calendar);

export const TodoCalendar: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return <CalendarWithTodoLogic value={date} onDateSelect={setDate} />;
};
