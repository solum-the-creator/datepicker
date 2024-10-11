import { Meta, StoryObj } from "@storybook/react";

import { TodoCalendar } from ".";

export default {
  title: "Components/TodoCalendar",
  component: TodoCalendar,
} as Meta;

type Story = StoryObj<typeof TodoCalendar>;

export const Default: Story = {
  args: {
    startWeekOnSunday: false,
    highlightWeekends: true,
    highlightHolidays: false,
    holidays: undefined,
    minDate: undefined,
    maxDate: undefined,
  },
};
