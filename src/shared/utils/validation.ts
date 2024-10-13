import { View } from "@customTypes/calendar";

import { toDate } from "./formatDatesHelpers";

export const canGoPrev = (view: View, year: number, month: number, minDate?: Date): boolean => {
  const parsedMinDate = toDate(minDate);

  if (!parsedMinDate) return true;

  if (view === "days") {
    return (
      year > parsedMinDate.getFullYear() ||
      (year === parsedMinDate.getFullYear() && month > parsedMinDate.getMonth())
    );
  }

  if (view === "months") {
    return year > parsedMinDate.getFullYear();
  }

  if (view === "years") {
    const startYear = Math.floor(year / 12) * 12;
    return startYear > parsedMinDate.getFullYear();
  }

  return true;
};

export const canGoNext = (view: View, year: number, month: number, maxDate?: Date): boolean => {
  const parsedMaxDate = toDate(maxDate);
  if (!parsedMaxDate) return true;

  if (view === "days") {
    return (
      year < parsedMaxDate.getFullYear() ||
      (year === parsedMaxDate.getFullYear() && month < parsedMaxDate.getMonth())
    );
  }

  if (view === "months") {
    return year < parsedMaxDate.getFullYear();
  }

  if (view === "years") {
    const endYear = Math.floor(year / 12) * 12 + 11;
    return endYear < parsedMaxDate.getFullYear();
  }

  return true;
};
