import { ComponentType, useState } from "react";

export type CalendarLogicProps = {
  value?: Date;
  onSelect?: (value: Date) => void;
};

type WithCalendarLogicProps = {
  selectedDate?: Date;
  currentMonth: number;
  currentYear: number;
  onDateSelect?: (date: Date) => void;
  onMonthChange?: (month: number, year: number) => void;
};

export function withCalendarLogic<P extends WithCalendarLogicProps>(WrappedComponent: ComponentType<P>) {
  return (props: Omit<P, keyof WithCalendarLogicProps> & CalendarLogicProps) => {
    const { value, onSelect, ...rest } = props;

    const currentDate = value || new Date();

    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);

    const handleDateSelect = (date: Date) => {
      setSelectedDate(date);
      onSelect?.(date);
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
        onDateSelect={handleDateSelect}
        onMonthChange={handleMonthChange}
      />
    );
  };
}
