import { getFirstDayOfMonth } from "@utils/dateHelpers";

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
