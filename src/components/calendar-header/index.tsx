import { ArrowButton, HeaderContainer, MonthYearText } from "./calendar-header.styled";

type CalendarHeaderProps = {
  month: string;
  year: string;
};

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({ month, year }) => {
  return (
    <HeaderContainer>
      <ArrowButton>{"<<"}</ArrowButton>
      <MonthYearText>
        {month} {year}
      </MonthYearText>
      <ArrowButton>{">>"}</ArrowButton>
    </HeaderContainer>
  );
};
