import { useState } from "react";
import { DateInput } from "@components/date-input";
import { isDateWithinRange } from "@utils/dateHelpers";
import { formatDate, parseDate } from "@utils/formatDatesHelpers";

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

    const handleDateSelect = (date: Date) => {
      setInputValue(formatDate(date));
      setIsCalendarOpen(false);
      onSelect?.(date);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      setInputValue(input);

      const parsedDate = parseDate(input);
      if (parsedDate) {
        if (!isDateWithinRange(parsedDate, minDate, maxDate)) {
          console.log("Date is out of range");
          return;
        }
        onSelect?.(parsedDate);
      }
    };

    const handleFocus = () => {
      setIsCalendarOpen(true);
    };

    const handleClearClick = () => {
      setInputValue("");
      onSelect?.(undefined);
    };

    return (
      <PickerContainer>
        <DateInput
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onClear={handleClearClick}
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
