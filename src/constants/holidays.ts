import { Holiday } from "@customTypes/holidays";

export const defaultHolidays: Holiday[] = [
  { date: new Date(2024, 0, 1), isRecurring: true },
  { date: new Date(2024, 0, 2), isRecurring: true },
  { date: new Date(2024, 0, 7), isRecurring: false },
  { date: new Date(2024, 2, 8), isRecurring: true },
  { date: new Date(2024, 4, 1), isRecurring: true },
  { date: new Date(2024, 4, 9), isRecurring: true },
  { date: new Date(2024, 4, 14), isRecurring: false },
  { date: new Date(2024, 6, 3), isRecurring: true },
  { date: new Date(2024, 10, 7), isRecurring: false },
  { date: new Date(2024, 11, 25), isRecurring: true },
];
