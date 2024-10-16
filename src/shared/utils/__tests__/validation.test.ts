import { canGoNext, canGoPrev, isYearWithinRange } from "@utils/validation";

describe("canGoPrev", () => {
  const minDate = new Date(2024, 0, 1);

  test("should allow going to the previous month in days view", () => {
    expect(canGoPrev("days", 2024, 1, minDate)).toBe(true);
    expect(canGoPrev("days", 2024, 0, minDate)).toBe(false);
  });

  test("should allow going to the previous year in months view", () => {
    expect(canGoPrev("months", 2025, 0, minDate)).toBe(true);
    expect(canGoPrev("months", 2024, 0, minDate)).toBe(false);
  });

  test("should allow going to the previous year in years view", () => {
    expect(canGoPrev("years", 2024, 0, minDate)).toBe(false);
  });

  test("should return true if minDate is undefined", () => {
    expect(canGoPrev("days", 2024, 1)).toBe(true);
    expect(canGoPrev("months", 2024, 1)).toBe(true);
    expect(canGoPrev("years", 2024, 1)).toBe(true);
  });
});

describe("canGoNext", () => {
  const maxDate = new Date(2025, 11, 31);

  test("should allow going to the next month in days view", () => {
    expect(canGoNext("days", 2025, 11, maxDate)).toBe(false);
    expect(canGoNext("days", 2025, 10, maxDate)).toBe(true);
    expect(canGoNext("days", 2024, 11, maxDate)).toBe(true);
  });

  test("should allow going to the next year in months view", () => {
    expect(canGoNext("months", 2025, 0, maxDate)).toBe(false);
    expect(canGoNext("months", 2024, 11, maxDate)).toBe(true);
  });

  test("should return true if maxDate is undefined", () => {
    expect(canGoNext("days", 2024, 1)).toBe(true);
    expect(canGoNext("months", 2024, 1)).toBe(true);
    expect(canGoNext("years", 2024, 1)).toBe(true);
  });
});

describe("isYearWithinRange", () => {
  const minDate = new Date(2020, 0, 1);
  const maxDate = new Date(2025, 11, 31);

  test("should return true when year is within the range", () => {
    expect(isYearWithinRange(2022, minDate, maxDate)).toBe(true);
    expect(isYearWithinRange(2020, minDate, maxDate)).toBe(true);
    expect(isYearWithinRange(2025, minDate, maxDate)).toBe(true);
  });

  test("should return false when year is below the minDate", () => {
    expect(isYearWithinRange(2019, minDate, maxDate)).toBe(false);
  });

  test("should return false when year is above the maxDate", () => {
    expect(isYearWithinRange(2026, minDate, maxDate)).toBe(false);
  });
});
