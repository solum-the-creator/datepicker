import { useState } from "react";
import { Calendar } from "@components/calendar";

import { withRangeLogic } from "@/shared/hoc/with-range-logic/withRangeLogic";

const CalendarWithRangeLogic = withRangeLogic(Calendar);

export const RangeCalendar: React.FC = () => {
  const [rangeStart, setRangeStart] = useState<Date | undefined>(new Date());
  const [rangeEnd, setRangeEnd] = useState<Date | undefined>(new Date(2024, 9, 20));

  return (
    <CalendarWithRangeLogic
      rangeStart={rangeStart}
      rangeEnd={rangeEnd}
      onRangeSelect={(start, end) => [setRangeStart(start), setRangeEnd(end)]}
      minDate={new Date(2024, 8, 10)}
    />
  );
};
