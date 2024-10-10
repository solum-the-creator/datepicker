import { useEffect, useRef, useState } from "react";

import { DateInput } from "@/shared/components/date-input";
import { isDateWithinRange } from "@/shared/utils/dateHelpers";
import { formatDate, parseDate } from "@/shared/utils/formatDatesHelpers";

import { CalendarContainer, PickerContainer } from "./with-picker-logic.styled";

type WithPickerLogicProps = {
  value?: Date;
  onSelect?: (date?: Date) => void;
  minDate?: Date;
  maxDate?: Date;
};

export function withPickerLogic<P extends WithPickerLogicProps>(WrappedComponent: React.ComponentType<P>) {
  return (props: Omit<P, keyof WithPickerLogicProps> & WithPickerLogicProps) => {
    const { value, onSelect, minDate, maxDate, ...rest } = props;

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
      onSelect?.(date);
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
            onSelect?.(parsedDate);
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
      onSelect?.(undefined);
    };

    return (
      <PickerContainer ref={pickerRef}>
        <DateInput
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onClear={handleClearClick}
          isError={isError}
        />

        {isCalendarOpen && (
          <CalendarContainer>
            <WrappedComponent
              {...(rest as P)}
              value={value}
              onSelect={handleDateSelect}
              minDate={minDate}
              maxDate={maxDate}
            />
          </CalendarContainer>
        )}
      </PickerContainer>
    );
  };
}
