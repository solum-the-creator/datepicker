import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";

import BaseCalendar from ".";

export default {
  title: "Components/Calendar",
  component: BaseCalendar,
} as Meta<typeof BaseCalendar>;

const Template: StoryFn<typeof BaseCalendar> = (args) => {
  const [selectedDate, setSelectedDate] = useState<Date>();

  return <BaseCalendar {...args} value={selectedDate} onDateSelect={setSelectedDate} />;
};

export const Base = Template.bind({});
Base.args = {
  startWeekOnSunday: false,
  highlightWeekends: true,
  highlightHolidays: false,
};

export const WithMondayFirst = Template.bind({});
WithMondayFirst.args = {
  startWeekOnSunday: false,
};

export const WithHighlightHolidays = Template.bind({});
WithHighlightHolidays.args = {
  highlightHolidays: true,
  highlightWeekends: true,
};

export const MinMaxDate = Template.bind({});
MinMaxDate.args = {
  startWeekOnSunday: false,
  highlightHolidays: true,
  highlightWeekends: true,
  minDate: new Date(2024, 9, 10),
  maxDate: new Date(2024, 10, 20),
};

export const WithCustomTheme = Template.bind({});
WithCustomTheme.args = {
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
};
