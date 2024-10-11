import { useEffect, useRef, useState } from "react";

import { DatePickerWithCalendar } from "@/shared/components/date-picker-with-calendar";
import { isDateWithinRange } from "@/shared/utils/dateHelpers";
import { formatDate, parseDate } from "@/shared/utils/formatDatesHelpers";

type WithPickerLogicProps = {
  value?: Date;
  onDateSelect?: (date?: Date) => void;
  minDate?: Date;
  maxDate?: Date;
};

export function withPickerLogic<P extends WithPickerLogicProps>(WrappedComponent: React.ComponentType<P>) {
  return (props: Omit<P, keyof WithPickerLogicProps> & WithPickerLogicProps) => {
    const { value, onDateSelect, minDate, maxDate, ...rest } = props;

    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value ? formatDate(value) : "");
    const [isError, setIsError] = useState(false);

    const pickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
          setIsCalendarOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const handleDateSelect = (date: Date) => {
      setInputValue(formatDate(date));
      setIsCalendarOpen(false);
      onDateSelect?.(date);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      setInputValue(input);

      if (input.length >= 10) {
        const parsedDate = parseDate(input);
        if (parsedDate) {
          if (!isDateWithinRange(parsedDate, minDate, maxDate)) {
            setIsError(true);
          } else {
            setIsError(false);
            onDateSelect?.(parsedDate);
          }
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
      <DatePickerWithCalendar
        value={inputValue}
        placeholder="Select date"
        isCalendarOpen={isCalendarOpen}
        onFocus={handleFocus}
        onChange={handleInputChange}
        onClear={handleClearClick}
        isError={isError}
        pickerRef={pickerRef}
        WrappedComponent={WrappedComponent}
        componentProps={{ ...rest, selectedDate: value, onDateSelect: handleDateSelect, minDate, maxDate }}
      />
    );
  };
}
