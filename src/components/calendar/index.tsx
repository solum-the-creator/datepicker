import { CalendarBody } from "@components/calendar-body";
import { CalendarHeader } from "@components/calendar-header";
import { Holiday } from "@customTypes/holidays";
import GlobalStyles from "@styles/global";
import { theme } from "@styles/theme";
import { getMonthName } from "@utils/dateHelpers";
import { ThemeProvider } from "styled-components";

import { CalendarContainer } from "./calendar.styled";

type CalendarProps = {
  currentMonth: number;
  currentYear: number;
  selectedDate?: Date;
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
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
  highlightHolidays = false,
  highlightWeekends = false,
  startWeekOnSunday = true,
}) => {
  const handlePrevClick = () => {
    const newMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const newYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    onMonthChange?.(newMonth, newYear);
  };

  const handleNextClick = () => {
    const newMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const newYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    onMonthChange?.(newMonth, newYear);
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
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
        />
        <CalendarBody
          month={currentMonth}
          year={currentYear}
          startWeekOnSunday={startWeekOnSunday}
          highlightWeekends={highlightWeekends}
          highlightHolidays={highlightHolidays}
          holidays={holidays}
          selectedDate={selectedDate}
          onDateSelect={handleDateClick}
        />
      </CalendarContainer>
    </ThemeProvider>
  );
};
