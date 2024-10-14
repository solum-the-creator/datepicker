import { View } from "@components/calendar";
import { getMonthName } from "@utils/dateHelpers";
import { getCalendarTitle } from "@utils/formatDatesHelpers";
import { canGoNext, canGoPrev } from "@utils/validation";

import { ArrowButton, HeaderContainer, MonthYearText, TextButton } from "./calendar-header.styled";

type CalendarHeaderProps = {
  month: number;
  year: number;
  view: View;
  minDate?: Date;
  maxDate?: Date;
  onPrevClick: () => void;
  onNextClick: () => void;
  onMonthClick: () => void;
  onYearClick: () => void;
};

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  month,
  year,
  view,
  minDate,
  maxDate,
  onPrevClick,
  onNextClick,
  onMonthClick,
  onYearClick,
}) => {
  const title = getCalendarTitle(view, year);

  const isCanGoPrev = canGoPrev(view, year, month, minDate);
  const isCanGoNext = canGoNext(view, year, month, maxDate);

  const handlePrevClick = () => {
    if (isCanGoPrev) {
      onPrevClick();
    }
  };

  const handleNextClick = () => {
    if (isCanGoNext) {
      onNextClick();
    }
  };

  return (
    <HeaderContainer>
      <ArrowButton onClick={handlePrevClick} disabled={!isCanGoPrev}>
        {"<<"}
      </ArrowButton>
      <MonthYearText>
        {view === "days" ? (
          <>
            <TextButton onClick={onMonthClick}>{getMonthName(month)}</TextButton>
            <TextButton onClick={onYearClick}>{year}</TextButton>
          </>
        ) : (
          <TextButton onClick={onYearClick}>{title}</TextButton>
        )}
      </MonthYearText>
      <ArrowButton onClick={handleNextClick} disabled={!isCanGoNext}>
        {">>"}
      </ArrowButton>
    </HeaderContainer>
  );
};
