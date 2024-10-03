import { Meta, StoryFn } from "@storybook/react";

import { Calendar } from ".";

export default {
  title: "Components/Calendar",
  component: Calendar,
} as Meta;

const Template: StoryFn<typeof Calendar> = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  startWeekOnSunday: true,
};
