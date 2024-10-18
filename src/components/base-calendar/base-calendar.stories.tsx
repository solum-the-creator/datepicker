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
    theme: {
      colors: {
        primary: "#ffffff",
        secondary: "#cccccc",
        background: "#000000",
        disabledText: "#666666",
        activeText: "#000000",
        active: "#82B3F4",
        activeBright: "#a3c8f9",
        range: "#1a2b40",
        border: "#444444",
        hoverBackground: "#ffffff1a",
        hoverButton: "#82B3F4",
        muted: "#333333",
        red: "#ff4c4c",
      },
    },
  },
};
