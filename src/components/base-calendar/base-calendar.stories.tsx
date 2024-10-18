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

export const MinMaxDate: Story = {
  args: {
    startWeekOnSunday: false,
    highlightHolidays: true,
    highlightWeekends: true,
    minDate: new Date(2024, 9, 10),
    maxDate: new Date(2024, 10, 20),
  },
};

export const WithCustomTheme: Story = {
  args: {
    startWeekOnSunday: false,
    highlightHolidays: true,
    highlightWeekends: true,
  },
};
