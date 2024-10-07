import { useState } from "react";
import { CalendarHeader } from "@components/calendar-header";
import { CalendarDaysView } from "@components/calendar-views/calendar-days-view";
import { CalendarMonthsView } from "@components/calendar-views/calendar-months-view";
import { CalendarYearsView } from "@components/calendar-views/calendar-years-view";
import { Holiday } from "@customTypes/holidays";
import GlobalStyles from "@styles/global";
import { theme } from "@styles/theme";
import { getMonthName } from "@utils/dateHelpers";
import { ThemeProvider } from "styled-components";

import { CalendarContainer } from "./calendar.styled";

export type View = "days" | "months" | "years";

type CalendarProps = {
  currentMonth: number;
  currentYear: number;
  selectedDate?: Date;
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
  minDate?: Date;
  maxDate?: Date;
  onMonthChange?: (month: number, year: number) => void;
  onDateSelect?: (date: Date) => void;
};

export const Calendar: React.FC<CalendarProps> = ({
  currentMonth,
  currentYear,
  onMonthChange,
  onDateSelect,
  holidays,
  selectedDate,
  minDate,
  maxDate,
  highlightHolidays = false,
  highlightWeekends = false,
  startWeekOnSunday = true,
}) => {
  const [view, setView] = useState<View>("days");

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
      onMonthChange?.(newMonth, newYear);
    } else if (view === "months") {
      onMonthChange?.(currentMonth, currentYear - 1);
    } else if (view === "years") {
      onMonthChange?.(currentMonth, currentYear - 12);
    }
  };

  const handleNextClick = () => {
    if (view === "days") {
      const newMonth = currentMonth === 11 ? 0 : currentMonth + 1;
      const newYear = currentMonth === 11 ? currentYear + 1 : currentYear;
      onMonthChange?.(newMonth, newYear);
    } else if (view === "months") {
      onMonthChange?.(currentMonth, currentYear + 1);
    } else if (view === "years") {
      onMonthChange?.(currentMonth, currentYear + 12);
    }
  };

  const handleMonthSelect = (month: number) => {
    setView("days");
    onMonthChange?.(month, currentYear);
  };

  const handleYearSelect = (year: number) => {
    setView("months");
    onMonthChange?.(currentMonth, year);
  };

  const handleDateClick = (date: Date) => {
    onDateSelect?.(date);
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
            selectedDate={selectedDate}
            onDateSelect={handleDateClick}
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
