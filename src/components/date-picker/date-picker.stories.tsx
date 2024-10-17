import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react/*";

import { DatePicker } from ".";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
} as Meta;

type Story = StoryObj<typeof DatePicker>;

const WithOnChangeProp = () => {
  const [value, setValue] = useState<Date>();

  const onChange = (value?: Date) => {
    setValue(value);
  };

  return <DatePicker value={value} onDateSelect={onChange} />;
};

export const WithOnChange: Story = {
  render: () => <WithOnChangeProp />,
};

export const Default: Story = {
  args: {
    startWeekOnSunday: false,
    highlightWeekends: true,
    highlightHolidays: false,
    label: "Date",
  },
};
