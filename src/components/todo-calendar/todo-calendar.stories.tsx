import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { TodoCalendar } from ".";

export default {
  title: "Components/TodoCalendar",
  component: TodoCalendar,
} as Meta;

type Story = StoryObj<typeof TodoCalendar>;

const WithOnChangeProp = () => {
  const [value, setValue] = useState<Date>();

  const onChange = (value?: Date) => {
    setValue(value);
  };

  return <TodoCalendar value={value} onDateSelect={onChange} />;
};

export const Default: Story = {
  render: () => <WithOnChangeProp />,
};
