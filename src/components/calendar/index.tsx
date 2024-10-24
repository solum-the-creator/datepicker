import { useState } from "react";
import { View } from "@customTypes/calendar";
import { Todo } from "@customTypes/todo";

import { CalendarHeader } from "@/shared/components/calendar-header";
import { CalendarDaysView } from "@/shared/components/calendar-views/calendar-days-view";
import { CalendarMonthsView } from "@/shared/components/calendar-views/calendar-months-view";
import { CalendarYearsView } from "@/shared/components/calendar-views/calendar-years-view";
import { useCalendarDate } from "@/shared/hooks/useCalendarDate";
import { Holiday } from "@/shared/types/holidays";
import { calculateNewMonth, calculateNewYear, isDateWithinRange } from "@/shared/utils/dateHelpers";

import { CalendarContainer } from "./calendar.styled";

type CalendarProps = {
  value?: Date;
  rangeStart?: Date;
  rangeEnd?: Date;
  minDate?: Date;
  maxDate?: Date;
  isRange?: boolean;
  withTodo?: boolean;
  todos?: Todo[];
  holidays?: Holiday[];
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  onDateSelect?: (date?: Date) => void;
  onRangeSelect?: (start?: Date, end?: Date) => void;
};

export const Calendar: React.FC<CalendarProps> = ({
  value,
  rangeStart,
  rangeEnd,
  minDate,
  maxDate,
  holidays,
  onDateSelect,
  onRangeSelect,
  todos,
  withTodo = false,
  isRange = false,
  highlightHolidays = false,
  highlightWeekends = false,
  startWeekOnSunday = true,
}) => {
  const [view, setView] = useState<View>("days");

  const { currentMonth, currentYear, handleMonthYearChange } = useCalendarDate(value, rangeStart, rangeEnd);

  const handleMonthClick = () => {
    setView("months");
  };

  const handleYearClick = () => {
    setView("years");
  };

  const changeMonthYear = (step: number) => {
    switch (view) {
      case "days": {
        const newMonth = calculateNewMonth(currentMonth, step);
        const newYear = calculateNewYear(currentMonth, step, newMonth, currentYear);
        handleMonthYearChange(newMonth, newYear);
        break;
      }
      case "months": {
        handleMonthYearChange(currentMonth, currentYear + step);
        break;
      }
      case "years": {
        handleMonthYearChange(currentMonth, currentYear + step * 12);
        break;
      }
      default:
        break;
    }
  };

  const handlePrevClick = () => changeMonthYear(-1);

  const handleNextClick = () => changeMonthYear(1);

  const handleMonthSelect = (month: number) => {
    setView("days");
    handleMonthYearChange(month, currentYear);
  };

  const handleYearSelect = (year: number) => {
    setView("months");
    handleMonthYearChange(currentMonth, year);
  };

  const handleSingleDateSelect = (date: Date) => {
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const handleRangeDateSelect = (date: Date) => {
    if (!onRangeSelect) {
      return;
    }

    onRangeSelect(date, date);
  };

  const handleDateSelect = (date: Date) => {
    if (!isDateWithinRange(date, minDate, maxDate)) return;

    if (isRange) {
      handleRangeDateSelect(date);
    } else {
      handleSingleDateSelect(date);
    }
  };

  return (
    <CalendarContainer $withTodo={withTodo}>
      <CalendarHeader
        month={currentMonth}
        year={currentYear}
        view={view}
        minDate={minDate}
        maxDate={maxDate}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        onMonthClick={handleMonthClick}
        onYearClick={handleYearClick}
      />

      {view === "days" && (
        <CalendarDaysView
          month={currentMonth}
          year={currentYear}
          minDate={minDate}
          maxDate={maxDate}
          startWeekOnSunday={startWeekOnSunday}
          highlightWeekends={highlightWeekends}
          highlightHolidays={highlightHolidays}
          holidays={holidays}
          withTodos={withTodo}
          todos={todos}
          selectedDate={isRange ? undefined : value}
          rangeStart={isRange ? rangeStart : undefined}
          rangeEnd={isRange ? rangeEnd : undefined}
          onDateSelect={handleDateSelect}
        />
      )}

      {view === "months" && (
        <CalendarMonthsView
          currentMonth={currentMonth}
          currentYear={currentYear}
          onMonthSelect={handleMonthSelect}
          minDate={minDate}
          maxDate={maxDate}
        />
      )}

      {view === "years" && (
        <CalendarYearsView
          currentYear={currentYear}
          onYearSelect={handleYearSelect}
          minDate={minDate}
          maxDate={maxDate}
        />
      )}
    </CalendarContainer>
  );
};
