import { useMemo } from "react";

import { defaultHolidays } from "@/shared/constants/holidays";
import { Holiday } from "@/shared/types/holidays";
import {
  enhanceCalendarDays,
  getCalendarDays,
  getWeekDaysNames,
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
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
  onDateSelect?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
};

export const CalendarDaysView: React.FC<CalendarDaysViewProps> = ({
  month,
  year,
  selectedDate,
  onDateSelect,
  minDate,
  maxDate,
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
          }) => (
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
              $isSelected={selectedDate && isSameDate(selectedDate, new Date(currentYear, currentMonth, day))}
              $isDisabled={isDisabled}>
              {day}
            </DayCell>
          )
        )}
      </DatesGrid>
    </CalendarBodyContainer>
  );
};
