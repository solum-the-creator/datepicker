import { DatePickerWithCalendar } from "@/shared/components/date-picker-with-calendar";

type PickerLogicProps = {
  label?: string;
};

type WithPickerLogicProps = {
  value?: Date;
  onDateSelect?: (date?: Date) => void;
  minDate?: Date;
  maxDate?: Date;
};

export function withPickerLogic<P extends WithPickerLogicProps>(WrappedComponent: React.ComponentType<P>) {
  return (props: Omit<P, keyof WithPickerLogicProps> & WithPickerLogicProps & PickerLogicProps) => {
    const { value, onDateSelect, minDate, maxDate, label, ...rest } = props;

    return (
      <DatePickerWithCalendar
        value={value}
        label={label}
        placeholder="Select date"
        onDateSelect={onDateSelect}
        minDate={minDate}
        maxDate={maxDate}>
        {(handleDateSelect) => (
          <WrappedComponent
            {...(rest as P)}
            value={value}
            onDateSelect={handleDateSelect}
            minDate={minDate}
            maxDate={maxDate}
          />
        )}
      </DatePickerWithCalendar>
    );
  };
}
