import { isYearWithinRange } from "@utils/validation";

import { CalendarBodyContainer } from "./calendar-years-view.styled";
import { YearCell } from "./year-cell";

type CalendarYearsViewProps = {
  currentYear: number;
  onYearSelect: (year: number) => void;
  minDate?: Date;
  maxDate?: Date;
};

export const CalendarYearsView: React.FC<CalendarYearsViewProps> = ({
  currentYear,
  onYearSelect,
  minDate,
  maxDate,
}) => {
  const startYear = Math.floor(currentYear / 12) * 12;
  const years = Array.from({ length: 12 }, (_, i) => startYear + i);

  return (
    <CalendarBodyContainer>
      {years.map((year) => {
        const isDisabled = !isYearWithinRange(year, minDate, maxDate);
        return (
          <YearCell
            key={year}
            year={year}
            onYearSelect={onYearSelect}
            isSelected={year === currentYear}
            isDisabled={isDisabled}
          />
        );
      })}
    </CalendarBodyContainer>
  );
};
