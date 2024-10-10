import { Meta, StoryFn } from "@storybook/react/*";

import { BaseCalendarWithPicker } from ".";

export default {
  title: "Components/DatePicker",
  component: BaseCalendarWithPicker,
} as Meta;

const Template: StoryFn<typeof BaseCalendarWithPicker> = (args) => <BaseCalendarWithPicker {...args} />;

export const DatePickerDefault = Template.bind({});
DatePickerDefault.args = {
  minDate: new Date(2024, 0, 1),
  maxDate: new Date(2024, 11, 31),
  highlightHolidays: true,
  highlightWeekends: true,
  startWeekOnSunday: true,
};
