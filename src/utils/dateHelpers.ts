import { CalendarDay } from "@customTypes/days";

export const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

export const getCalendarDays = (year: number, month: number): CalendarDay[] => {
  const daysInMonth = getDaysInMonth(year, month);

  const firstDayOfWeek = getFirstDayOfMonth(year, month);
  const lastDayOfWeek = (firstDayOfWeek + daysInMonth) % 7;

  const prevMonthDays = Array.from({ length: firstDayOfWeek }, (_, i) => ({
    day: new Date(year, month, -i).getDate(),
    isCurrentMonth: false,
  })).reverse();

  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    isCurrentMonth: true,
  }));

  const nextMonthDays = Array.from({ length: 7 - lastDayOfWeek }, (_, i) => ({
    day: i + 1,
    isCurrentMonth: false,
  }));

  return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
};

export const isToday = (year: number, month: number, day: number): boolean => {
  const today = new Date();

  return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
};
