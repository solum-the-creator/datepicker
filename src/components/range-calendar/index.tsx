import { useState } from "react";
import { Calendar } from "@components/calendar";
import { Holiday } from "@customTypes/holidays";

import { withRangeLogic } from "@/shared/hoc/with-range-logic/withRangeLogic";

const CalendarWithRangeLogic = withRangeLogic(Calendar);

type RangeCalendarProps = {
  minDate?: Date;
  maxDate?: Date;
  labelStart?: string;
  labelEnd?: string;
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
};

export const RangeCalendar: React.FC<RangeCalendarProps> = ({ ...props }) => {
  const [rangeStart, setRangeStart] = useState<Date>();
  const [rangeEnd, setRangeEnd] = useState<Date>();

  return (
    <CalendarWithRangeLogic
      rangeStart={rangeStart}
      rangeEnd={rangeEnd}
      onRangeSelect={(start, end) => [setRangeStart(start), setRangeEnd(end)]}
      {...props}
    />
  );
};
