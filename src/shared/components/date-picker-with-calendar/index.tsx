/* eslint-disable @typescript-eslint/no-explicit-any */

import { DateInput } from "@/shared/components/date-input";

import { CalendarContainer, PickerContainer } from "./date-picker-with-calendar";

type DatePickerWithCalendarProps = {
  value: string;
  placeholder?: string;
  isCalendarOpen: boolean;
  onFocus: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  isError: boolean;
  pickerRef: React.RefObject<HTMLDivElement>;
  WrappedComponent: React.ComponentType<any>;
  componentProps: any;
};

export const DatePickerWithCalendar: React.FC<DatePickerWithCalendarProps> = ({
  value,
  isCalendarOpen,
  onFocus,
  onChange,
  onClear,
  isError,
  pickerRef,
  WrappedComponent,
  componentProps,
  placeholder,
}) => (
  <PickerContainer ref={pickerRef}>
    <DateInput
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onClear={onClear}
      isError={isError}
    />
    {isCalendarOpen && (
      <CalendarContainer>
        <WrappedComponent {...componentProps} />
      </CalendarContainer>
    )}
  </PickerContainer>
);
