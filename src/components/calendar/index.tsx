import { CalendarBody } from "@components/calendar-body";
import { CalendarHeader } from "@components/calendar-header";
import GlobalStyles from "@styles/global";
import { theme } from "@styles/theme";
import { getMonthName } from "@utils/dateHelpers";
import { ThemeProvider } from "styled-components";

import { CalendarContainer } from "./calendar.styled";

type CalendarProps = {
  currentMonth: number;
  currentYear: number;
  startWeekOnSunday?: boolean;
  onMonthChange?: (month: number, year: number) => void;
};

export const Calendar: React.FC<CalendarProps> = ({
  currentMonth,
  currentYear,
  onMonthChange,
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
        <CalendarBody month={currentMonth} year={currentYear} startWeekOnSunday={startWeekOnSunday} />
      </CalendarContainer>
    </ThemeProvider>
  );
};
