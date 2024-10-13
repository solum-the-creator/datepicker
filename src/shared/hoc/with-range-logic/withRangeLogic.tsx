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

    const handleStartDateSelect = (start?: Date) => {
      onRangeSelect?.(start, rangeEnd);
    };

    const handleEndDateSelect = (end?: Date) => {
      onRangeSelect?.(rangeStart, end);
    };

    return (
      <RangeContainer>
        <DatePickerWithCalendar
          value={rangeStart}
          placeholder="Start date"
          minDate={minDate}
          maxDate={maxDate}
          onDateSelect={handleStartDateSelect}>
          {(handleDateSelect) => (
            <WrappedComponent
              {...(rest as P)}
              isRange={true}
              rangeStart={rangeStart}
              rangeEnd={rangeEnd}
              minDate={minDate}
              maxDate={maxDate}
              onRangeSelect={(start) => {
                handleDateSelect(start);
              }}
            />
          )}
        </DatePickerWithCalendar>

        <DatePickerWithCalendar
          value={rangeEnd}
          placeholder="End date"
          minDate={minDate}
          maxDate={maxDate}
          onDateSelect={handleEndDateSelect}>
          {(handleDateSelect) => (
            <WrappedComponent
              {...(rest as P)}
              isRange={true}
              rangeStart={rangeStart}
              rangeEnd={rangeEnd}
              minDate={minDate}
              maxDate={maxDate}
              onRangeSelect={(_, end) => {
                handleDateSelect(end);
              }}
            />
          )}
        </DatePickerWithCalendar>
      </RangeContainer>
    );
  };
}
