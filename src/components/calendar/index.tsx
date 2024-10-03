import { useState } from "react";
import { CalendarBody } from "@components/calendar-body";
import { CalendarHeader } from "@components/calendar-header";
import GlobalStyles from "@styles/global";
import { theme } from "@styles/theme";
import { getMonthName } from "@utils/dateHelpers";
import { ThemeProvider } from "styled-components";

import { CalendarContainer } from "./calendar.styled";

export const Calendar: React.FC = () => {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const handlePrevClick = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextClick = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
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
        <CalendarBody month={currentMonth} year={currentYear} />
      </CalendarContainer>
    </ThemeProvider>
  );
};
