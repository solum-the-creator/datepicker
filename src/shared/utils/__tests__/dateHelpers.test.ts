import { CalendarDay } from "@customTypes/days";
import { Holiday } from "@customTypes/holidays";
import {
  calculateNewYear,
  getCalendarDays,
  getDaysInMonth,
  getFirstDayOfMonth,
  getWeekDaysNames,
  isDateWithinRange,
  isHoliday,
  isSameDate,
  isToday,
  isWeekend,
} from "@utils/dateHelpers";

describe("getFirstDayOfMonth", () => {
  test("should return correct day when week starts on Sunday", () => {
    expect(getFirstDayOfMonth(2024, 0, true)).toBe(1);
    expect(getFirstDayOfMonth(2024, 1, true)).toBe(4);
    expect(getFirstDayOfMonth(2024, 11, true)).toBe(0);
  });

  test("should return correct day when week starts on Monday", () => {
    expect(getFirstDayOfMonth(2024, 0, false)).toBe(0);
    expect(getFirstDayOfMonth(2024, 1, false)).toBe(3);
    expect(getFirstDayOfMonth(2024, 11, false)).toBe(6);
  });

  test("should return correct values for edge cases", () => {
    expect(getFirstDayOfMonth(2023, 11, true)).toBe(5);
    expect(getFirstDayOfMonth(2023, 11, false)).toBe(4);

    expect(getFirstDayOfMonth(2025, 0, true)).toBe(3);
    expect(getFirstDayOfMonth(2025, 0, false)).toBe(2);
  });
});

describe("getDaysInMonth", () => {
  test("should return 31 days for January", () => {
    expect(getDaysInMonth(2024, 1)).toBe(31);
  });

  test("should return 28 days for February in a non-leap year", () => {
    expect(getDaysInMonth(2023, 2)).toBe(28);
  });

  test("should return 29 days for February in a leap year", () => {
    expect(getDaysInMonth(2024, 2)).toBe(29);
  });

  test("should handle edge cases for month and year", () => {
    expect(getDaysInMonth(-1, 1)).toBe(31);
    expect(getDaysInMonth(2024, 0)).toBe(31);
    expect(getDaysInMonth(2024, 13)).toBe(31);
  });
});

describe("getCalendarDays", () => {
  test("should return correct calendar days when week starts on Sunday", () => {
    const year = 2024;
    const month = 0;

    const result = getCalendarDays(year, month, true);

    expect(result.length).toBe(35);
    expect(result[0]).toEqual<CalendarDay>({
      day: 31,
      month: 11,
      year: 2023,
      isCurrentMonth: false,
    });
    expect(result[1]).toEqual<CalendarDay>({
      day: 1,
      month: 0,
      year: 2024,
      isCurrentMonth: true,
    });
    expect(result[34]).toEqual<CalendarDay>({
      day: 3,
      month: 1,
      year: 2024,
      isCurrentMonth: false,
    });
  });

  test("should return correct calendar days when week starts on Monday", () => {
    const year = 2024;
    const month = 0;

    const result = getCalendarDays(year, month, false);

    expect(result.length).toBe(35);
    expect(result[0]).toEqual<CalendarDay>({
      day: 1,
      month: 0,
      year: 2024,
      isCurrentMonth: true,
    });
    expect(result[30]).toEqual<CalendarDay>({
      day: 31,
      month: 0,
      year: 2024,
      isCurrentMonth: true,
    });
    expect(result[34]).toEqual<CalendarDay>({
      day: 4,
      month: 1,
      year: 2024,
      isCurrentMonth: false,
    });
  });
});

describe("isToday", () => {
  test("should return true for today's date", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    expect(isToday(year, month, day)).toBe(true);
  });

  test("should return false for a different day", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate() - 1;

    expect(isToday(year, month, day)).toBe(false);
  });

  test("should return false for a different month", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() - 1;
    const day = today.getDate();

    expect(isToday(year, month, day)).toBe(false);
  });

  test("should return false for a different year", () => {
    const today = new Date();
    const year = today.getFullYear() - 1;
    const month = today.getMonth();
    const day = today.getDate();

    expect(isToday(year, month, day)).toBe(false);
  });

  test("should return false for a future date", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate() + 1;

    expect(isToday(year, month, day)).toBe(false);
  });
});

describe("getWeekDaysNames", () => {
  test("should return week days starting with Sunday when startWeekOnSunday is true", () => {
    const result = getWeekDaysNames(true);
    expect(result).toEqual(["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]);
  });

  test("should return week days starting with Monday when startWeekOnSunday is false", () => {
    const result = getWeekDaysNames(false);
    expect(result).toEqual(["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]);
  });
});

describe("isWeekend", () => {
  test("should return true for Sunday (index 0) when week starts on Sunday", () => {
    expect(isWeekend(0, true)).toBe(true);
  });

  test("should return true for Saturday (index 6) when week starts on Sunday", () => {
    expect(isWeekend(6, true)).toBe(true);
  });

  test("should return false for other days when week starts on Sunday", () => {
    expect(isWeekend(1, true)).toBe(false);
    expect(isWeekend(2, true)).toBe(false);
    expect(isWeekend(3, true)).toBe(false);
    expect(isWeekend(4, true)).toBe(false);
    expect(isWeekend(5, true)).toBe(false);
  });

  test("should return true for Saturday (index 5) when week starts on Monday", () => {
    expect(isWeekend(5, false)).toBe(true);
  });

  test("should return true for Sunday (index 6) when week starts on Monday", () => {
    expect(isWeekend(6, false)).toBe(true);
  });

  test("should return false for other days when week starts on Monday", () => {
    expect(isWeekend(0, false)).toBe(false);
    expect(isWeekend(1, false)).toBe(false);
    expect(isWeekend(2, false)).toBe(false);
    expect(isWeekend(3, false)).toBe(false);
    expect(isWeekend(4, false)).toBe(false);
  });
});

describe("isHoliday", () => {
  const recurringHoliday: Holiday = { date: new Date(2024, 0, 1), isRecurring: true };
  const nonRecurringHoliday: Holiday = { date: new Date(2024, 11, 25), isRecurring: false };

  test("should return true for a recurring holiday with the same month and day", () => {
    const date = new Date(2025, 0, 1);
    expect(isHoliday(date, [recurringHoliday])).toBe(true);
  });

  test("should return false for a recurring holiday with a different month", () => {
    const date = new Date(2025, 1, 1);
    expect(isHoliday(date, [recurringHoliday])).toBe(false);
  });

  test("should return false for a non-recurring holiday in a different year", () => {
    const date = new Date(2025, 11, 25);
    expect(isHoliday(date, [nonRecurringHoliday])).toBe(false);
  });

  test("should return true for a non-recurring holiday with the same date", () => {
    const date = new Date(2024, 11, 25);
    expect(isHoliday(date, [nonRecurringHoliday])).toBe(true);
  });

  test("should return false when the date does not match any holidays", () => {
    const date = new Date(2024, 6, 4);
    expect(isHoliday(date, [recurringHoliday, nonRecurringHoliday])).toBe(false);
  });

  test("should return false when no holidays are provided", () => {
    const date = new Date(2024, 0, 1);
    expect(isHoliday(date)).toBe(false);
  });

  test("should return true if the date matches multiple holidays", () => {
    const additionalHoliday: Holiday = { date: new Date(2024, 0, 1), isRecurring: false };
    const date = new Date(2024, 0, 1);
    expect(isHoliday(date, [recurringHoliday, additionalHoliday])).toBe(true);
  });
});

describe("isSameDate", () => {
  test("should return true for dates with the same day, month, and year", () => {
    const date1 = new Date(2024, 0, 1);
    const date2 = new Date(2024, 0, 1);
    expect(isSameDate(date1, date2)).toBe(true);
  });

  test("should return false for dates with different days", () => {
    const date1 = new Date(2024, 0, 1);
    const date2 = new Date(2024, 0, 2);
    expect(isSameDate(date1, date2)).toBe(false);
  });

  test("should return false for dates with different months", () => {
    const date1 = new Date(2024, 0, 1);
    const date2 = new Date(2024, 1, 1);
    expect(isSameDate(date1, date2)).toBe(false);
  });

  test("should return false for dates with different years", () => {
    const date1 = new Date(2024, 0, 1);
    const date2 = new Date(2023, 0, 1);
    expect(isSameDate(date1, date2)).toBe(false);
  });

  test("should return true for the same date object", () => {
    const date = new Date(2024, 0, 1);
    expect(isSameDate(date, date)).toBe(true);
  });
});

describe("isDateWithinRange", () => {
  const minDate = new Date(2024, 5, 1);
  const maxDate = new Date(2024, 5, 30);

  test("should return true if date is within the range", () => {
    const date = new Date(2024, 5, 15);
    expect(isDateWithinRange(date, minDate, maxDate)).toBe(true);
  });

  test("should return true if date is equal to minDate", () => {
    const date = new Date(2024, 5, 1);
    expect(isDateWithinRange(date, minDate, maxDate)).toBe(true);
  });

  test("should return true if date is equal to maxDate", () => {
    const date = new Date(2024, 5, 30);
    expect(isDateWithinRange(date, minDate, maxDate)).toBe(true);
  });

  test("should return false if date is before minDate", () => {
    const date = new Date(2024, 4, 31);
    expect(isDateWithinRange(date, minDate, maxDate)).toBe(false);
  });

  test("should return false if date is after maxDate", () => {
    const date = new Date(2024, 6, 1);
    expect(isDateWithinRange(date, minDate, maxDate)).toBe(false);
  });

  test("should return true if minDate is not provided", () => {
    const date = new Date(2024, 5, 15);
    expect(isDateWithinRange(date, undefined, maxDate)).toBe(true);
  });

  test("should return true if maxDate is not provided", () => {
    const date = new Date(2024, 5, 15);
    expect(isDateWithinRange(date, minDate)).toBe(true);
  });

  test("should return true if both minDate and maxDate are not provided", () => {
    const date = new Date(2024, 5, 15);
    expect(isDateWithinRange(date)).toBe(true);
  });
});

describe("calculateNewYear", () => {
  test("should decrement the year when stepping back from January to December", () => {
    const result = calculateNewYear(0, -1, 11, 2024);
    expect(result).toBe(2023);
  });

  test("should increment the year when stepping forward from December to January", () => {
    const result = calculateNewYear(11, 1, 0, 2024);
    expect(result).toBe(2025);
  });

  test("should return the same year when moving backward within the same year", () => {
    const result = calculateNewYear(5, -2, 3, 2024);
    expect(result).toBe(2024);
  });

  test("should increment the year when moving forward from November to January", () => {
    const result = calculateNewYear(10, 2, 0, 2024);
    expect(result).toBe(2025);
  });

  test("should decrement the year when moving backward from February to December", () => {
    const result = calculateNewYear(1, -2, 11, 2024);
    expect(result).toBe(2023);
  });
});
