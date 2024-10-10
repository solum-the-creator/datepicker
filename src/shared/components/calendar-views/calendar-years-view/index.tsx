import { CalendarCell } from "../calendar-views.styled";

import { CalendarBodyContainer } from "./calendar-years-view.styled";

type CalendarYearsViewProps = {
  currentYear: number;
  onYearSelect: (year: number) => void;
};

export const CalendarYearsView: React.FC<CalendarYearsViewProps> = ({ currentYear, onYearSelect }) => {
  const startYear = Math.floor(currentYear / 12) * 12;
  const years = Array.from({ length: 12 }, (_, i) => startYear + i);

  return (
    <CalendarBodyContainer>
      {years.map((year) => (
        <CalendarCell key={year} onClick={() => onYearSelect(year)} $isSelected={year === currentYear}>
          {year}
        </CalendarCell>
      ))}
    </CalendarBodyContainer>
  );
};
