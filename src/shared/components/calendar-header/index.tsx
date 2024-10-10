import { View } from "@components/calendar";

import { ArrowButton, HeaderContainer, MonthYearText, TextButton } from "./calendar-header.styled";

type CalendarHeaderProps = {
  month?: string;
  year: number;
  view: View;
  onPrevClick: () => void;
  onNextClick: () => void;
  onMonthClick: () => void;
  onYearClick: () => void;
};

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  month,
  year,
  view,
  onPrevClick,
  onNextClick,
  onMonthClick,
  onYearClick,
}) => {
  let title = "";

  if (view === "days") {
    title = `${month} ${year}`;
  } else if (view === "months") {
    title = `${year}`;
  } else if (view === "years") {
    const startYear = Math.floor(year / 12) * 12;
    const endYear = startYear + 11;
    title = `${startYear} - ${endYear}`;
  }

  return (
    <HeaderContainer>
      <ArrowButton onClick={onPrevClick}>{"<<"}</ArrowButton>
      <MonthYearText>
        {view === "days" ? (
          <>
            <TextButton onClick={onMonthClick}>{month}</TextButton>
            <TextButton onClick={onYearClick}>{year}</TextButton>
          </>
        ) : (
          <TextButton onClick={onYearClick}>{title}</TextButton>
        )}
      </MonthYearText>
      <ArrowButton onClick={onNextClick}>{">>"}</ArrowButton>
    </HeaderContainer>
  );
};
