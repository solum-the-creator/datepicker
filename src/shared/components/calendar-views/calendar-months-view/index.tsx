import { isMonthDisabled } from "@utils/validation";

import { shortMonths } from "@/shared/constants/months";

import { CalendarCell } from "../calendar-views.styled";

import { CalendarBodyContainer } from "./calendar-months-view";

type CalendarMonthsViewProps = {
  currentMonth: number;
  currentYear: number;
  onMonthSelect: (month: number) => void;
  minDate?: Date;
  maxDate?: Date;
};

export const CalendarMonthsView: React.FC<CalendarMonthsViewProps> = ({
  currentMonth,
  currentYear,
  onMonthSelect,
  minDate,
  maxDate,
}) => {
  const handleMonthClick = (month: number, isDisabled: boolean) => {
    if (!isDisabled) {
      onMonthSelect(month);
    }
  };

  return (
    <CalendarBodyContainer>
      {shortMonths.map((month, index) => {
        const isDisabled = isMonthDisabled(index, currentYear, minDate, maxDate);
        return (
          <CalendarCell
            key={month}
            onClick={() => handleMonthClick(index, isDisabled)}
            $isDisabled={isDisabled}
            $isSelected={currentMonth === index}>
            {month}
          </CalendarCell>
        );
      })}
    </CalendarBodyContainer>
  );
};
