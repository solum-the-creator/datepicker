import { useMemo } from "react";
import { Todo } from "@customTypes/todo";

import { defaultHolidays } from "@/shared/constants/holidays";
import { Holiday } from "@/shared/types/holidays";
import {
  enhanceCalendarDays,
  getCalendarDays,
  getWeekDaysNames,
  isDateWithinRange,
  isSameDate,
} from "@/shared/utils/dateHelpers";

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

  const handleDateClick = (day: number, month: number, year: number) => {
    const newSelectedDate = new Date(year, month, day);

    if (onDateSelect) {
      onDateSelect(newSelectedDate);
    }
  };

  const hasTodos = (date: Date) => {
    return todos.some((todo) => isSameDate(todo.date, date));
  };

  return (
    <CalendarBodyContainer>
      <WeekDaysHeader>
        {weekDays.map((day) => (
          <WeekDayCell key={day}>{day}</WeekDayCell>
        ))}
      </WeekDaysHeader>

      <DatesGrid>
        {enhancedDays.map(
          ({
            day,
            month: currentMonth,
            year: currentYear,
            isCurrentMonth,
            isToday,
            isDisabled,
            isHoliday,
            isWeekend,
          }) => {
            const currentDate = new Date(currentYear, currentMonth, day);
            const isSelected = selectedDate && isSameDate(selectedDate, currentDate);

            const isRangeStart = rangeStart && isSameDate(rangeStart, currentDate);
            const isRangeEnd = rangeEnd && isSameDate(rangeEnd, currentDate);
            const isInRange = rangeStart && rangeEnd && isDateWithinRange(currentDate, rangeStart, rangeEnd);
            const hasTask = withTodos && hasTodos(currentDate);

            return (
              <DayCell
                key={`${currentYear}-${currentMonth}-${day}`}
                type="button"
                role="gridcell"
                disabled={isDisabled}
                onClick={() => handleDateClick(day, currentMonth, currentYear)}
                $isCurrentMonth={isCurrentMonth}
                $isToday={isToday}
                $isWeekend={highlightWeekends && isWeekend}
                $isHoliday={highlightHolidays && isHoliday}
                $isSelected={isSelected}
                $isInRange={isInRange}
                $isRangeStart={isRangeStart}
                $isRangeEnd={isRangeEnd}
                $isDisabled={isDisabled}
                $hasTask={hasTask}>
                {day}
              </DayCell>
            );
          }
        )}
      </DatesGrid>
    </CalendarBodyContainer>
  );
};
