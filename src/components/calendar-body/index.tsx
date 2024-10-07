import { useMemo } from "react";
import { Holiday } from "@customTypes/holidays";
import {
  getCalendarDays,
  getWeekDaysNames,
  isHoliday,
  isSameDate,
  isToday,
  isWeekend,
} from "@utils/dateHelpers";

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
  selectedDate?: Date;
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
  onDateSelect?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
};

export const CalendarBody: React.FC<CalendarBodyProps> = ({
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

  const isDateDisabled = (date: Date): boolean => {
    return !!(minDate && date < minDate) || !!(maxDate && date > maxDate);
  };

  const handleDateClick = (day: number, month: number, year: number) => {
    const newSelectedDate = new Date(year, month, day);

    if (isDateDisabled(newSelectedDate)) {
      return;
    }

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
        {days.map(({ day, month: currentMonth, year: currentYear, isCurrentMonth }, index) => (
          <DayCell
            key={`${currentYear}-${currentMonth}-${day}`}
            type="button"
            role="gridcell"
            disabled={isDateDisabled(new Date(currentYear, currentMonth, day))}
            onClick={() => handleDateClick(day, currentMonth, currentYear)}
            $isCurrentMonth={isCurrentMonth}
            $isToday={isToday(currentYear, currentMonth, day)}
            $isWeekend={highlightWeekends && isWeekend(index % 7, startWeekOnSunday)}
            $isHoliday={highlightHolidays && isHoliday(new Date(currentYear, currentMonth, day), holidays)}
            $isSelected={selectedDate && isSameDate(selectedDate, new Date(currentYear, currentMonth, day))}
            $isDisabled={isDateDisabled(new Date(currentYear, currentMonth, day))}>
            {day}
          </DayCell>
        ))}
      </DatesGrid>
    </CalendarBodyContainer>
  );
};
