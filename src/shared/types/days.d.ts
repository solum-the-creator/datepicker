export type CalendarDay = {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  isToday?: boolean;
  isDisabled?: boolean;
  isWeekend?: boolean;
  isHoliday?: boolean;
};
