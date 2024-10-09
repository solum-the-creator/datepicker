import { Calendar } from "@components/calendar";
import { withCalendarLogic } from "@components/hoc/withCalendarLogic";
import { Holiday } from "@customTypes/holidays";

type BaseCalendarProps = {
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
};

const CalendarWithLogic = withCalendarLogic(Calendar);

export const BaseCalendar: React.FC<BaseCalendarProps> = () => {
  return (
    <CalendarWithLogic
      startWeekOnSunday={false}
      highlightHolidays={true}
      highlightWeekends={true}
      minDate={new Date(2024, 9, 1)}
      maxDate={new Date(2024, 9, 20)}
    />
  );
};
