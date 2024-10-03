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

  const prevMonth = month === 0 ? 11 : month - 1;
  const prevMonthYear = month === 0 ? year - 1 : year;

  const prevMonthDaysArray: CalendarDay[] = Array.from({ length: firstDayOfWeek }, (_, i) => ({
    day: new Date(year, month, -i).getDate(),
    month: prevMonth,
    year: prevMonthYear,
    isCurrentMonth: false,
  }));

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
