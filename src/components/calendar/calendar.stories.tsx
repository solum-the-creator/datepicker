import { Meta, StoryFn } from "@storybook/react";

import { Calendar } from ".";

export default {
  title: "Components/Calendar",
  component: Calendar,
} as Meta;

const Template: StoryFn = () => <Calendar />;

export const Default = Template.bind({});
