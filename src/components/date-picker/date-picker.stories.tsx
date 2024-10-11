import { Meta, StoryObj } from "@storybook/react/*";

import { BaseCalendarWithPicker } from ".";

export default {
  title: "Components/DatePicker",
  component: BaseCalendarWithPicker,
} as Meta;

type Story = StoryObj<typeof BaseCalendarWithPicker>;

export const Default: Story = {
  args: {
    startWeekOnSunday: false,
    highlightWeekends: true,
    highlightHolidays: false,
    holidays: undefined,
    minDate: undefined,
    maxDate: undefined,
  },
};
