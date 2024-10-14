import { Meta, StoryObj } from "@storybook/react";

import { RangeCalendar } from ".";

export default {
  title: "Components/RangeCalendar",
  component: RangeCalendar,
} as Meta;

type Story = StoryObj<typeof RangeCalendar>;

export const Default: Story = {
  args: {
    startWeekOnSunday: false,
    highlightWeekends: true,
    highlightHolidays: false,
    labelStart: "Start date",
    labelEnd: "End date",
    holidays: undefined,
    minDate: undefined,
    maxDate: undefined,
  },
};
