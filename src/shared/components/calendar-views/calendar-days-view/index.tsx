import { useCallback, useMemo } from "react";
import { Todo } from "@customTypes/todo";

import { defaultHolidays } from "@/shared/constants/holidays";
import { useDayProps } from "@/shared/hooks/useDayProps";
import { Holiday } from "@/shared/types/holidays";
import { enhanceCalendarDays, getCalendarDays, getWeekDaysNames } from "@/shared/utils/dateHelpers";

import {
  CalendarBodyContainer,
  DatesGrid,
  DayCell,
  WeekDayCell,
  WeekDaysHeader,
} from "./calendar-days-view.styled";

type CalendarDaysViewProps = {
  month: number;
  year: number;
  selectedDate?: Date;
  rangeStart?: Date;
  rangeEnd?: Date;
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
  withTodos?: boolean;
  todos?: Todo[];
  onDateSelect?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
};

export const CalendarDaysView: React.FC<CalendarDaysViewProps> = ({
  month,
  year,
  selectedDate,
  rangeStart,
  rangeEnd,
  onDateSelect,
  minDate,
  maxDate,
  todos = [],
  withTodos = false,
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

  const enhancedDays = useMemo(
    () => enhanceCalendarDays(days, startWeekOnSunday, minDate, maxDate, holidays),
    [days, startWeekOnSunday, minDate, maxDate, holidays]
  );

  const getDayProps = useDayProps({
    selectedDate,
    rangeStart,
    rangeEnd,
    withTodos,
    todos,
    highlightWeekends,
    highlightHolidays,
  });

  const handleDateClick = useCallback(
    (day: number, month: number, year: number) => {
      const newSelectedDate = new Date(year, month, day);

      if (onDateSelect) {
        onDateSelect(newSelectedDate);
      }
    },
    [onDateSelect]
  );

  return (
    <CalendarBodyContainer>
      <WeekDaysHeader>
        {weekDays.map((day) => (
          <WeekDayCell key={day}>{day}</WeekDayCell>
        ))}
      </WeekDaysHeader>

      <DatesGrid>
        {enhancedDays.map((dayInfo) => {
          return (
            <DayCell
              key={`${dayInfo.year}-${dayInfo.month}-${dayInfo.day}`}
              data-day={dayInfo.day}
              data-month={dayInfo.month}
              data-year={dayInfo.year}
              onClick={() => handleDateClick(dayInfo.day, dayInfo.month, dayInfo.year)}
              {...getDayProps(dayInfo)}>
              {dayInfo.day}
            </DayCell>
          );
        })}
      </DatesGrid>
    </CalendarBodyContainer>
  );
};
