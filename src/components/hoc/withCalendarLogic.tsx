import { ComponentType, useEffect, useState } from "react";
import { isDateWithinRange } from "@utils/dateHelpers";

export type CalendarLogicProps = {
  value?: Date;
  onSelect?: (value: Date) => void;
  minDate?: Date;
  maxDate?: Date;
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

    useEffect(() => {
      setCurrentMonth(currentDate.getMonth());
      setCurrentYear(currentDate.getFullYear());
    }, [value]);

    const handleDateSelect = (date: Date) => {
      if (isDateWithinRange(date, minDate, maxDate)) {
        onSelect?.(date);
      }
    };

    const handleMonthChange = (newMonth: number, newYear: number) => {
      setCurrentMonth(newMonth);
      setCurrentYear(newYear);
    };

    return (
      <WrappedComponent
        {...(rest as unknown as P)}
        selectedDate={value}
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
