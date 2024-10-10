import { Meta, StoryFn } from "@storybook/react";

import { TodoCalendar } from ".";

export default {
  title: "Components/TodoCalendar",
  component: TodoCalendar,
} as Meta;

const Template: StoryFn<typeof TodoCalendar> = (args) => <TodoCalendar {...args} />;

export const BaseCalendarDefault = Template.bind({});
BaseCalendarDefault.args = {
  startWeekOnSunday: true,
  highlightWeekends: true,
  highlightHolidays: false,
};
