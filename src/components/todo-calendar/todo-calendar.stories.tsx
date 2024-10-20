import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";

import TodoCalendar from ".";

export default {
  title: "Components/TodoCalendar",
  component: TodoCalendar,
} as Meta<typeof TodoCalendar>;

const Template: StoryFn<typeof TodoCalendar> = (args) => {
  const [value, setValue] = useState<Date>();

  const onDateSelect = (value?: Date) => {
    setValue(value);
  };

  return <TodoCalendar {...args} value={value} onDateSelect={onDateSelect} />;
};

export const Default = Template.bind({});
Default.args = {
  startWeekOnSunday: false,
  highlightWeekends: true,
  highlightHolidays: false,
};
