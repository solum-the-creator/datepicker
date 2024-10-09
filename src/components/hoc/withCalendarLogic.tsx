import { ComponentType, useState } from "react";
import { isDateWithinRange } from "@utils/dateHelpers";

export type CalendarLogicProps = {
  value?: Date;
  minDate?: Date;
  maxDate?: Date;
  onSelect?: (value: Date) => void;
};

type WithCalendarLogicProps = {
  currentMonth: number;
  currentYear: number;
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  onMonthChange?: (month: number, year: number) => void;
};

export function withCalendarLogic<P extends WithCalendarLogicProps>(WrappedComponent: ComponentType<P>) {
  return (props: Omit<P, keyof WithCalendarLogicProps> & CalendarLogicProps) => {
    const { value, onSelect, minDate, maxDate, ...rest } = props;

    const currentDate = value || new Date();

    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);

    const handleDateSelect = (date: Date) => {
      if (isDateWithinRange(date, minDate, maxDate)) {
        setSelectedDate(date);
        onSelect?.(date);
      }
    };

    const handleMonthChange = (newMonth: number, newYear: number) => {
      setCurrentMonth(newMonth);
      setCurrentYear(newYear);
    };

    return (
      <WrappedComponent
        {...(rest as P)}
        selectedDate={selectedDate}
        currentMonth={currentMonth}
        currentYear={currentYear}
        minDate={minDate}
        maxDate={maxDate}
        onDateSelect={handleDateSelect}
        onMonthChange={handleMonthChange}
      />
    );
  };
}
