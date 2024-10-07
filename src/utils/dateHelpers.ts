import { CalendarDay } from "@customTypes/days";
import { Holiday } from "@customTypes/holidays";

export const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (year: number, month: number, startWeekOnSunday = true) => {
  const firstDay = new Date(year, month, 1).getDay();

  if (startWeekOnSunday) {
    return firstDay;
  }
  return firstDay === 0 ? 6 : firstDay - 1;
};

export const getCalendarDays = (year: number, month: number, startWeekOnSunday = true): CalendarDay[] => {
  const daysInMonth = getDaysInMonth(year, month);

  const firstDayOfWeek = getFirstDayOfMonth(year, month, startWeekOnSunday);

  const lastDayOfWeek = (firstDayOfWeek + daysInMonth) % 7;

  const prevMonth = month === 0 ? 11 : month - 1;
  const prevMonthYear = month === 0 ? year - 1 : year;

  const prevMonthDaysArray: CalendarDay[] = Array.from({ length: firstDayOfWeek }, (_, i) => ({
    day: new Date(year, month, -i).getDate(),
    month: prevMonth,
    year: prevMonthYear,
    isCurrentMonth: false,
  })).reverse();

  const currentMonthDaysArray: CalendarDay[] = Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    month,
    year,
    isCurrentMonth: true,
  }));

  const nextMonth = month === 11 ? 0 : month + 1;
  const nextMonthYear = month === 11 ? year + 1 : year;
  const remainingDays = lastDayOfWeek === 0 ? 0 : 7 - lastDayOfWeek;

  const nextMonthDaysArray: CalendarDay[] = Array.from({ length: remainingDays }, (_, i) => ({
    day: i + 1,
    month: nextMonth,
    year: nextMonthYear,
    isCurrentMonth: false,
  }));

  return [...prevMonthDaysArray, ...currentMonthDaysArray, ...nextMonthDaysArray];
};

export const isToday = (year: number, month: number, day: number): boolean => {
  const today = new Date();

  return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
};

export const getMonthName = (month: number) => {
  return new Date(0, month).toLocaleString("en-US", { month: "long" });
};

export const getWeekDaysNames = (startWeekOnSunday = true) => {
  if (startWeekOnSunday) {
    return ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  }
  return ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
};

export const isWeekend = (dayIndex: number, startWeekOnSunday: boolean): boolean => {
  if (startWeekOnSunday) {
    return dayIndex === 0 || dayIndex === 6;
  }
  return dayIndex === 5 || dayIndex === 6;
};

export const isHoliday = (date: Date, holidays: Holiday[]): boolean => {
  return holidays.some(({ date: holidayDate, isRecurring }) => {
    if (isRecurring) {
      return holidayDate.getDate() === date.getDate() && holidayDate.getMonth() === date.getMonth();
    }
    return (
      holidayDate.getDate() === date.getDate() &&
      holidayDate.getMonth() === date.getMonth() &&
      holidayDate.getFullYear() === date.getFullYear()
    );
  });
};

export const isSameDate = (date1: Date, date2: Date): boolean => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};
