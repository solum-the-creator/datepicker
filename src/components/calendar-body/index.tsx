import { useMemo } from "react";
import { getCalendarDays, getWeekDaysNames, isToday } from "@utils/dateHelpers";

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
  startWeekOnSunday?: boolean;
};

export const CalendarBody: React.FC<CalendarBodyProps> = ({ month, year, startWeekOnSunday = true }) => {
  const weekDays = useMemo(() => getWeekDaysNames(startWeekOnSunday), [startWeekOnSunday]);

  const days = useMemo(
    () => getCalendarDays(year, month, startWeekOnSunday),
    [year, month, startWeekOnSunday]
  );

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
