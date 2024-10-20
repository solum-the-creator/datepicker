import { CalendarCell } from "../../calendar-views.styled";

type YearCellProps = {
  year: number;
  isSelected: boolean;
  isDisabled: boolean;
  onYearSelect: (year: number) => void;
};

export const YearCell: React.FC<YearCellProps> = ({ year, isSelected, isDisabled, onYearSelect }) => {
  const handleClick = () => {
    if (!isDisabled) {
      onYearSelect(year);
    }
  };
  return (
    <CalendarCell onClick={handleClick} $isSelected={isSelected} $isDisabled={isDisabled}>
      {year}
    </CalendarCell>
  );
};
