import { useEffect, useRef, useState } from "react";
import { isDateWithinRange, isValidDateParts } from "@utils/dateHelpers";
import { formatDate, parseDate } from "@utils/formatDatesHelpers";

import { DateInput } from "@/shared/components/date-input";
import { useClickOutside } from "@/shared/hooks/useClickOutside";

import { CalendarContainer, PickerContainer } from "./date-picker-with-calendar";

type DatePickerWithCalendarProps = {
  value?: Date;
  label?: string;
  onDateSelect?: (date?: Date) => void;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  children: (handleDateSelect: (date?: Date) => void) => React.ReactNode;
};

export const DatePickerWithCalendar: React.FC<DatePickerWithCalendarProps> = ({
  value,
  label,
  children,
  onDateSelect,
  minDate,
  maxDate,
  placeholder,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value ? formatDate(value) : "");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setInputValue(value ? formatDate(value) : "");
  }, [value]);

  const handleClickOutside = () => {
    setIsCalendarOpen(false);
  };

  useClickOutside(ref, handleClickOutside);

  const handleDateSelect = (date?: Date) => {
    setInputValue(date ? formatDate(date) : "");
    setIsCalendarOpen(false);
    onDateSelect?.(date);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setInputValue(input);

    if (input.length >= 10) {
      const parsedDate = parseDate(input);
      const [day, month, year] = input.split(".").map(Number);

      if (!isValidDateParts(day, month, year)) {
        setIsError(true);
        return;
      }

      if (parsedDate && isDateWithinRange(parsedDate, minDate, maxDate)) {
        setIsError(false);
        onDateSelect?.(parsedDate);
      } else {
        setIsError(true);
      }
    } else {
      setIsError(false);
    }
  };

  const handleFocus = () => {
    setIsCalendarOpen(true);
  };

  const handleClearClick = () => {
    setIsCalendarOpen(false);
    setIsError(false);
    setInputValue("");
    onDateSelect?.(undefined);
  };

  return (
    <PickerContainer ref={ref}>
      <DateInput
        value={inputValue}
        label={label}
        placeholder={placeholder}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onClear={handleClearClick}
        isError={isError}
      />
      {isCalendarOpen && <CalendarContainer>{children(handleDateSelect)}</CalendarContainer>}
    </PickerContainer>
  );
};
