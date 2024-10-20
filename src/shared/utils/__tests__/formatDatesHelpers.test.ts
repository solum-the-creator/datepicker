import { formatDate, parseDate } from "@utils/formatDatesHelpers";

describe("formatDate", () => {
  test("should format a date correctly", () => {
    const date = new Date(2024, 0, 5);
    expect(formatDate(date)).toBe("05.01.2024");
  });

  test("should format a date with double-digit day and month", () => {
    const date = new Date(2024, 9, 15);
    expect(formatDate(date)).toBe("15.10.2024");
  });
});

describe("parseDate", () => {
  test("should parse a valid date string", () => {
    const dateString = "05.01.2024";
    const expectedDate = new Date(2024, 0, 5);
    expect(parseDate(dateString)).toEqual(expectedDate);
  });

  test("should parse a date string with a single-digit day and month", () => {
    const dateString = "1.2.2024";
    const expectedDate = new Date(2024, 1, 1);
    expect(parseDate(dateString)).toEqual(expectedDate);
  });

  test("should return null for an invalid date string", () => {
    const dateString = "31.02.2024";
    expect(parseDate(dateString)).toBeNull();
  });

  test("should return null for incorrect date format", () => {
    const dateString = "2024-01-05";
    expect(parseDate(dateString)).toBeNull();
  });

  test("should return null for a date string with missing parts", () => {
    const dateString = "05.2024";
    expect(parseDate(dateString)).toBeNull();
  });

  test("should return null for a completely invalid string", () => {
    const dateString = "invalid-date";
    expect(parseDate(dateString)).toBeNull();
  });
});
