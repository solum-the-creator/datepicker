import { shortMonths } from "@/constants/months";

import { CalendarCell } from "../calendar-views.styled";

import { CalendarBodyContainer } from "./calendar-months-view";

type CalendarMonthsViewProps = {
  currentMonth: number;
  onMonthSelect: (month: number) => void;
};

export const CalendarMonthsView: React.FC<CalendarMonthsViewProps> = ({ currentMonth, onMonthSelect }) => {
  return (
    <CalendarBodyContainer>
      {shortMonths.map((month, index) => (
        <CalendarCell key={month} onClick={() => onMonthSelect(index)} $isSelected={currentMonth === index}>
          {month}
        </CalendarCell>
      ))}
    </CalendarBodyContainer>
  );
};
