import { getCalendarDays, isToday } from "@utils/dateHelpers";

import {
  CalendarBodyContainer,
  DatesGrid,
  DayCell,
  WeekDayCell,
  WeekDaysHeader,
} from "./calendar-body.styled";

type CalendarBodyProps = {
  month: number;
  year: number;
};

export const CalendarBody: React.FC<CalendarBodyProps> = ({ month, year }) => {
  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const days = getCalendarDays(year, month);

  return (
    <CalendarBodyContainer>
      <WeekDaysHeader>
        {weekDays.map((day) => (
          <WeekDayCell key={day}>{day}</WeekDayCell>
        ))}
      </WeekDaysHeader>

      <DatesGrid>
        {days.map(({ day, month: currentMonth, year: currentYear, isCurrentMonth }) => (
          <DayCell
            key={`${currentYear}-${currentMonth}-${day}`}
            type="button"
            role="gridcell"
            $isCurrentMonth={isCurrentMonth}
            $isToday={isToday(currentYear, currentMonth, day)}>
            {day}
          </DayCell>
        ))}
      </DatesGrid>
    </CalendarBodyContainer>
  );
};
