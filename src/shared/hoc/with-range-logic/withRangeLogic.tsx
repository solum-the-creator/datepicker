import { useEffect, useRef, useState } from "react";
import { isDateWithinRange } from "@utils/dateHelpers";
import { formatDate, parseDate } from "@utils/formatDatesHelpers";

import { DatePickerWithCalendar } from "@/shared/components/date-picker-with-calendar";

import { RangeContainer } from "./with-range-logic.styled";

type WithRangeLogicProps = {
  rangeStart?: Date;
  rangeEnd?: Date;
  isRange?: boolean;
  onRangeSelect?: (start?: Date, end?: Date) => void;
  minDate?: Date;
  maxDate?: Date;
};

export function withRangeLogic<P extends WithRangeLogicProps>(WrappedComponent: React.ComponentType<P>) {
  return (props: Omit<P, keyof WithRangeLogicProps> & WithRangeLogicProps) => {
    const { rangeStart, rangeEnd, minDate, maxDate, onRangeSelect, ...rest } = props;

    const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
    const [isEndCalendarOpen, setIsEndCalendarOpen] = useState(false);

    const [inputStartValue, setInputStartValue] = useState(rangeStart ? formatDate(rangeStart) : "");
    const [inputEndValue, setInputEndValue] = useState(rangeEnd ? formatDate(rangeEnd) : "");

    const [isStartError, setIsStartError] = useState(false);
    const [isEndError, setIsEndError] = useState(false);

    const startPickerRef = useRef<HTMLDivElement>(null);
    const endPickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (startPickerRef.current && !startPickerRef.current.contains(e.target as Node)) {
          setIsStartCalendarOpen(false);
        }
        if (endPickerRef.current && !endPickerRef.current.contains(e.target as Node)) {
          setIsEndCalendarOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const handleRangeSelect = (start?: Date, end?: Date) => {
      setInputStartValue(start ? formatDate(start) : "");
      setInputEndValue(end ? formatDate(end) : "");
      setIsStartCalendarOpen(false);
      setIsEndCalendarOpen(false);
      onRangeSelect?.(start, end);
    };

    const handleStartInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      setInputStartValue(input);

      if (input.length >= 10) {
        const parsedDate = parseDate(input);
        if (parsedDate && isDateWithinRange(parsedDate, minDate, maxDate)) {
          setIsStartError(false);
          onRangeSelect?.(parsedDate, rangeEnd);
        } else {
          setIsStartError(true);
        }
      } else {
        setIsStartError(false);
      }
    };

    const handleEndInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      setInputEndValue(input);

      if (input.length >= 10) {
        const parsedDate = parseDate(input);
        if (parsedDate && isDateWithinRange(parsedDate, minDate, maxDate)) {
          setIsEndError(false);
          onRangeSelect?.(rangeStart, parsedDate);
        } else {
          setIsEndError(true);
        }
      } else {
        setIsEndError(false);
      }
    };

    const handleStartFocus = () => {
      setIsStartCalendarOpen(true);
      setIsEndCalendarOpen(false);
    };

    const handleEndFocus = () => {
      setIsEndCalendarOpen(true);
      setIsStartCalendarOpen(false);
    };

    const handleClearClick = () => {
      setIsStartCalendarOpen(false);
      setIsEndCalendarOpen(false);
      setIsStartError(false);
      setIsEndError(false);
      setInputStartValue("");
      setInputEndValue("");
      onRangeSelect?.(undefined, undefined);
    };

    return (
      <RangeContainer>
        <DatePickerWithCalendar
          value={inputStartValue}
          placeholder="Start date"
          isCalendarOpen={isStartCalendarOpen}
          onFocus={handleStartFocus}
          onChange={handleStartInputChange}
          onClear={handleClearClick}
          isError={isStartError}
          pickerRef={startPickerRef}
          WrappedComponent={WrappedComponent}
          componentProps={{
            ...rest,
            isRange: true,
            rangeStart,
            rangeEnd,
            minDate,
            maxDate,
            onRangeSelect: handleRangeSelect,
          }}
        />

        <DatePickerWithCalendar
          value={inputEndValue}
          placeholder="End date"
          isCalendarOpen={isEndCalendarOpen}
          onFocus={handleEndFocus}
          onChange={handleEndInputChange}
          onClear={handleClearClick}
          isError={isEndError}
          pickerRef={endPickerRef}
          WrappedComponent={WrappedComponent}
          componentProps={{
            ...rest,
            isRange: true,
            rangeStart,
            rangeEnd,
            minDate,
            maxDate,
            onRangeSelect: handleRangeSelect,
          }}
        />
      </RangeContainer>
    );
  };
}
