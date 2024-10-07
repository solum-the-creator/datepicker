import { useMemo } from "react";
import { Holiday } from "@customTypes/holidays";
import { getCalendarDays, getWeekDaysNames, isHoliday, isToday, isWeekend } from "@utils/dateHelpers";

import { defaultHolidays } from "@/constants/holidays";

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
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
};

export const CalendarBody: React.FC<CalendarBodyProps> = ({
  month,
  year,
  startWeekOnSunday = true,
  highlightWeekends = false,
  highlightHolidays = false,
  holidays = defaultHolidays,
}) => {
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
        {days.map(({ day, month: currentMonth, year: currentYear, isCurrentMonth }, index) => (
          <DayCell
            key={`${currentYear}-${currentMonth}-${day}`}
            type="button"
            role="gridcell"
            $isCurrentMonth={isCurrentMonth}
            $isToday={isToday(currentYear, currentMonth, day)}
            $isWeekend={highlightWeekends && isWeekend(index % 7, startWeekOnSunday)}
            $isHoliday={highlightHolidays && isHoliday(new Date(currentYear, currentMonth, day), holidays)}>
            {day}
          </DayCell>
        ))}
      </DatesGrid>
    </CalendarBodyContainer>
  );
};
