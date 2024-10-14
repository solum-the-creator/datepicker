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

    const handleRangeSelect = (start?: Date, end?: Date) => {
      if (start && end && end < start) {
        onRangeSelect?.(end, start);
        return;
      }
      onRangeSelect?.(start, end);
    };

    return (
      <RangeContainer>
        <DatePickerWithCalendar
          value={rangeStart}
          placeholder="Start date"
          minDate={minDate}
          maxDate={maxDate}
          onDateSelect={(date) => handleRangeSelect(date, rangeEnd)}>
          {(handleDateSelect) => (
            <WrappedComponent
              {...(rest as P)}
              isRange={true}
              rangeStart={rangeStart}
              rangeEnd={rangeEnd}
              minDate={minDate}
              maxDate={maxDate}
              onRangeSelect={(start) => handleDateSelect(start)}
            />
          )}
        </DatePickerWithCalendar>

        <DatePickerWithCalendar
          value={rangeEnd}
          placeholder="End date"
          minDate={minDate}
          maxDate={maxDate}
          onDateSelect={(date) => handleRangeSelect(rangeStart, date)}>
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
