import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { CalendarHeader } from "@/shared/components/calendar-header";
import { CalendarDaysView } from "@/shared/components/calendar-views/calendar-days-view";
import { CalendarMonthsView } from "@/shared/components/calendar-views/calendar-months-view";
import { CalendarYearsView } from "@/shared/components/calendar-views/calendar-years-view";
import { useCalendarDate } from "@/shared/hooks/useCalendarDate";
import GlobalStyles from "@/shared/styles/global";
import { theme } from "@/shared/styles/theme";
import { Holiday } from "@/shared/types/holidays";
import { getMonthName, isDateWithinRange } from "@/shared/utils/dateHelpers";

import { CalendarContainer } from "./calendar.styled";

export type View = "days" | "months" | "years";

type CalendarProps = {
  value?: Date;
  minDate?: Date;
  maxDate?: Date;

  holidays?: Holiday[];
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  onDateSelect?: (date?: Date) => void;
};

export const Calendar: React.FC<CalendarProps> = ({
  value,
  minDate,
  maxDate,
  holidays,
  onDateSelect,
  highlightHolidays = false,
  highlightWeekends = false,
  startWeekOnSunday = true,
}) => {
  const [view, setView] = useState<View>("days");

  const { currentMonth, currentYear, handleMonthYearChange } = useCalendarDate(value);

  const handleMonthClick = () => {
    setView("months");
  };

  const handleYearClick = () => {
    setView("years");
  };

  const handlePrevClick = () => {
    if (view === "days") {
      const newMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      const newYear = currentMonth === 0 ? currentYear - 1 : currentYear;

      handleMonthYearChange(newMonth, newYear);
    } else if (view === "months") {
      handleMonthYearChange(currentMonth, currentYear - 1);
    } else if (view === "years") {
      handleMonthYearChange(currentMonth, currentYear - 12);
    }
  };

  const handleNextClick = () => {
    if (view === "days") {
      const newMonth = currentMonth === 11 ? 0 : currentMonth + 1;
      const newYear = currentMonth === 11 ? currentYear + 1 : currentYear;
      handleMonthYearChange(newMonth, newYear);
    } else if (view === "months") {
      handleMonthYearChange(currentMonth, currentYear + 1);
    } else if (view === "years") {
      handleMonthYearChange(currentMonth, currentYear + 12);
    }
  };

  const handleMonthSelect = (month: number) => {
    setView("days");
    handleMonthYearChange(month, currentYear);
  };

  const handleYearSelect = (year: number) => {
    setView("months");
    handleMonthYearChange(currentMonth, year);
  };

  const handleDateSelect = (date: Date) => {
    if (isDateWithinRange(date, minDate, maxDate)) {
      onDateSelect?.(date);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <CalendarContainer>
        <CalendarHeader
          month={getMonthName(currentMonth)}
          year={currentYear}
          view={view}
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
            selectedDate={value}
            onDateSelect={handleDateSelect}
          />
        )}

        {view === "months" && (
          <CalendarMonthsView currentMonth={currentMonth} onMonthSelect={handleMonthSelect} />
        )}

        {view === "years" && <CalendarYearsView currentYear={currentYear} onYearSelect={handleYearSelect} />}
      </CalendarContainer>
    </ThemeProvider>
  );
};
