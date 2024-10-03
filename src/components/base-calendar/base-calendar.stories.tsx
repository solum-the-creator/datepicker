import { Meta, StoryFn } from "@storybook/react";

import { BaseCalendar } from ".";

export default {
  title: "Components/Calendar",
  component: BaseCalendar,
} as Meta;

const Template: StoryFn<typeof BaseCalendar> = (args) => <BaseCalendar {...args} />;

export const BaseCalendarDefault = Template.bind({});
BaseCalendarDefault.args = {
  startWeekOnSunday: true,
};
