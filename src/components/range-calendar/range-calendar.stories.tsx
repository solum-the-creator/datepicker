import { Meta, StoryFn } from "@storybook/react";

import { RangeCalendar } from ".";

export default {
  title: "Components/RangeCalendar",
  component: RangeCalendar,
} as Meta;

const Template: StoryFn<typeof RangeCalendar> = (args) => <RangeCalendar {...args} />;

export const BaseCalendarDefault = Template.bind({});
BaseCalendarDefault.args = {
  startWeekOnSunday: true,
  highlightWeekends: true,
  highlightHolidays: false,
};
