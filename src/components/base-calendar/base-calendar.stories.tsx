import { Meta, StoryObj } from "@storybook/react";

import { BaseCalendar } from ".";

export default {
  title: "Components/Calendar",
  component: BaseCalendar,
} as Meta;

type Story = StoryObj<typeof BaseCalendar>;

export const Base: Story = {
  args: {
    startWeekOnSunday: false,
    highlightWeekends: true,
    highlightHolidays: false,
    holidays: undefined,
    minDate: undefined,
    maxDate: undefined,
  },
};

export const WithMondayFirst: Story = {
  args: {
    startWeekOnSunday: false,
  },
};

export const WithHighlightHolidays: Story = {
  args: {
    highlightHolidays: true,
    highlightWeekends: true,
  },
};
