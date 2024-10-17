import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { RangeCalendar } from ".";

export default {
  title: "Components/RangeCalendar",
  component: RangeCalendar,
} as Meta;

type Story = StoryObj<typeof RangeCalendar>;

const WithOnRangeSelectProp = () => {
  const [rangeStart, setRangeStart] = useState<Date>();
  const [rangeEnd, setRangeEnd] = useState<Date>();

  const onRangeSelect = (start?: Date, end?: Date) => {
    setRangeStart(start);
    setRangeEnd(end);
  };

  return <RangeCalendar rangeStart={rangeStart} rangeEnd={rangeEnd} onRangeSelect={onRangeSelect} />;
};

export const WithOnChange: Story = {
  render: () => <WithOnRangeSelectProp />,
};

export const Default: Story = {
  args: {
    startWeekOnSunday: false,
    highlightWeekends: true,
    highlightHolidays: false,
    labelStart: "Start date",
    labelEnd: "End date",
  },
};
