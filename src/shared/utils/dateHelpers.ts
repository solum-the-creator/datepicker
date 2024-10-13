import { CalendarDay } from "@/shared/types/days";
import { Holiday } from "@/shared/types/holidays";

export const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};

export const getFirstDayOfMonth = (year: number, month: number, startWeekOnSunday = true) => {
  const firstDay = new Date(year, month, 1).getDay();

  if (startWeekOnSunday) {
    return firstDay;
  }
  return firstDay === 0 ? 6 : firstDay - 1;
};

const createDaysArray = (
  year: number,
  month: number,
  length: number,
  isCurrentMonth: boolean
): CalendarDay[] => {
  return Array.from({ length }, (_, i) => ({
    day: i + 1,
    month,
    year,
    isCurrentMonth,
  }));
};

const getPreviousMonthDays = (year: number, month: number, firstDayOfWeek: number): CalendarDay[] => {
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevMonthYear = month === 0 ? year - 1 : year;

  return Array.from({ length: firstDayOfWeek }, (_, i) => ({
    day: new Date(year, month, -i).getDate(),
    month: prevMonth,
    year: prevMonthYear,
    isCurrentMonth: false,
  })).reverse();
};

const getNextMonthDays = (year: number, month: number, remainingDays: number): CalendarDay[] => {
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextMonthYear = month === 11 ? year + 1 : year;

  return createDaysArray(nextMonthYear, nextMonth, remainingDays, false);
};

export const getCalendarDays = (year: number, month: number, startWeekOnSunday = true): CalendarDay[] => {
  const daysInMonth = getDaysInMonth(year, month + 1);
  const firstDayOfWeek = getFirstDayOfMonth(year, month, startWeekOnSunday);

  const prevMonthDaysArray = getPreviousMonthDays(year, month, firstDayOfWeek);
  const currentMonthDaysArray = createDaysArray(year, month, daysInMonth, true);

  const lastDayOfWeek = (firstDayOfWeek + daysInMonth) % 7;
  const remainingDays = lastDayOfWeek === 0 ? 0 : 7 - lastDayOfWeek;

  const nextMonthDaysArray = getNextMonthDays(year, month, remainingDays);

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

export const isHoliday = (date: Date, holidays: Holiday[] = []): boolean => {
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

export const isDateWithinRange = (date: Date, minDate?: Date, maxDate?: Date): boolean => {
  if (minDate && date < minDate) {
    return false;
  }

  if (maxDate && date > maxDate) {
    return false;
  }

  return true;
};

export const enhanceCalendarDays = (
  days: CalendarDay[],
  startWeekOnSunday: boolean = true,
  minDate?: Date,
  maxDate?: Date,
  holidays?: Holiday[]
): CalendarDay[] => {
  return days.map((day, index) => {
    const currentDate = new Date(day.year, day.month, day.day);
    const isDisabled = !isDateWithinRange(currentDate, minDate, maxDate);
    const isDayHoliday = isHoliday(currentDate, holidays);
    const isDayWeekend = isWeekend(index % 7, startWeekOnSunday);
    const isDayToday = isToday(day.year, day.month, day.day);

    return {
      ...day,
      isDisabled,
      isHoliday: isDayHoliday,
      isWeekend: isDayWeekend,
      isToday: isDayToday,
    };
  });
};

export const calculateNewMonth = (currentMonth: number, step: number) => {
  return (currentMonth + step + 12) % 12;
};

export const calculateNewYear = (
  currentMonth: number,
  step: number,
  newMonth: number,
  currentYear: number
) => {
  if (currentMonth + step < 0 && newMonth === 11) {
    return currentYear - 1;
  }
  if (currentMonth + step > 11 && newMonth === 0) {
    return currentYear + 1;
  }
  return currentYear;
};

export const isValidDateParts = (day?: number, month?: number, year?: number): boolean => {
  if (!day || !month || !year) return false;

  if (month < 1 || month > 12) return false;

  return day >= 1 && day <= getDaysInMonth(month, year);
};
