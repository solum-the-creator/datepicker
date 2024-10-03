import { ArrowButton, HeaderContainer, MonthYearText } from "./calendar-header.styled";

type CalendarHeaderProps = {
  month: string;
  year: number;
  onPrevClick: () => void;
  onNextClick: () => void;
};

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({ month, year, onPrevClick, onNextClick }) => {
  return (
    <HeaderContainer>
      <ArrowButton onClick={onPrevClick}>{"<<"}</ArrowButton>
      <MonthYearText>
        {month} {year}
      </MonthYearText>
      <ArrowButton onClick={onNextClick}>{">>"}</ArrowButton>
    </HeaderContainer>
  );
};
