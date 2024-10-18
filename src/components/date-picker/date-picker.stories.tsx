import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react/*";

import { DatePicker } from ".";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = (args) => {
  const [value, setValue] = useState<Date>();

  const onChange = (value?: Date) => {
    setValue(value);
  };

  return <DatePicker {...args} value={value} onDateSelect={onChange} />;
};

export const Default = Template.bind({});
Default.args = {
  startWeekOnSunday: false,
  highlightWeekends: true,
  highlightHolidays: false,
  label: "Date",
};
