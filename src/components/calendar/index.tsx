import { CalendarBody } from "@components/calendar-body";
import { CalendarHeader } from "@components/calendar-header";
import GlobalStyles from "@styles/global";
import { theme } from "@styles/theme";
import { ThemeProvider } from "styled-components";

import { CalendarContainer } from "./calendar.styled";

export const Calendar: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />

    <CalendarContainer>
      <CalendarHeader month="October" year="2024" />
      <CalendarBody month={9} year={2024} />
    </CalendarContainer>
  </ThemeProvider>
);
