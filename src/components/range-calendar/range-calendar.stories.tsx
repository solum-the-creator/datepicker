import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";

import RangeCalendar from ".";

export default {
  title: "Components/RangeCalendar",
  component: RangeCalendar,
} as Meta<typeof RangeCalendar>;

const Template: StoryFn<typeof RangeCalendar> = (args) => {
  const [rangeStart, setRangeStart] = useState<Date>();
  const [rangeEnd, setRangeEnd] = useState<Date>();

  const onRangeSelect = (start?: Date, end?: Date) => {
    setRangeStart(start);
    setRangeEnd(end);
  };

  return (
    <RangeCalendar {...args} rangeStart={rangeStart} rangeEnd={rangeEnd} onRangeSelect={onRangeSelect} />
  );
};

export const Default = Template.bind({});
Default.args = {
  startWeekOnSunday: false,
  highlightWeekends: true,
  highlightHolidays: false,
  labelStart: "Start date",
  labelEnd: "End date",
};
