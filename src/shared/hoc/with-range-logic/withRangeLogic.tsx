import { DatePickerWithCalendar } from "@/shared/components/date-picker-with-calendar";

import { RangeContainer } from "./with-range-logic.styled";

type RangeLogicProps = {
  labelStart?: string;
  labelEnd?: string;
};

type WithRangeLogicProps = {
  rangeStart?: Date;
  rangeEnd?: Date;
  isRange?: boolean;
  onRangeSelect?: (start?: Date, end?: Date) => void;
  minDate?: Date;
  maxDate?: Date;
};

export function withRangeLogic<P extends WithRangeLogicProps>(WrappedComponent: React.ComponentType<P>) {
  return (props: Omit<P, keyof WithRangeLogicProps> & WithRangeLogicProps & RangeLogicProps) => {
    const { rangeStart, rangeEnd, minDate, maxDate, onRangeSelect, labelStart, labelEnd, ...rest } = props;

    const handleRangeSelect = (start?: Date, end?: Date) => {
      onRangeSelect?.(start, end);
    };

    const renderStartWrappedComponent = (handleDateSelect: (date?: Date) => void) => (
      <WrappedComponent
        {...(rest as P)}
        isRange={true}
        rangeStart={rangeStart}
        rangeEnd={rangeEnd}
        minDate={minDate}
        maxDate={rangeEnd || maxDate}
        onRangeSelect={(start) => handleDateSelect(start)}
      />
    );

    const renderEndWrappedComponent = (handleDateSelect: (date?: Date) => void) => (
      <WrappedComponent
        {...(rest as P)}
        isRange={true}
        rangeStart={rangeStart}
        rangeEnd={rangeEnd}
        minDate={rangeStart || minDate}
        maxDate={maxDate}
        onRangeSelect={(_, end) => {
          handleDateSelect(end);
        }}
      />
    );

    return (
      <RangeContainer>
        <DatePickerWithCalendar
          value={rangeStart}
          label={labelStart}
          placeholder="Start date"
          minDate={minDate}
          maxDate={rangeEnd || maxDate}
          onDateSelect={(date) => handleRangeSelect(date, rangeEnd)}>
          {renderStartWrappedComponent}
        </DatePickerWithCalendar>

        <DatePickerWithCalendar
          value={rangeEnd}
          label={labelEnd}
          placeholder="End date"
          minDate={rangeStart || minDate}
          maxDate={maxDate}
          onDateSelect={(date) => handleRangeSelect(rangeStart, date)}>
          {renderEndWrappedComponent}
        </DatePickerWithCalendar>
      </RangeContainer>
    );
  };
}
