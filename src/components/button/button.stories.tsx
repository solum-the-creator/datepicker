import { Meta, StoryFn } from "@storybook/react";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    primary: { control: "boolean" },
    label: { control: "text" },
  },
};

export default meta;

type Story = StoryFn<typeof Button>;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
};
