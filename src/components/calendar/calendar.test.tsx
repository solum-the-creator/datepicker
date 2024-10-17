import { theme } from "@styles/theme";
import { fireEvent, render, screen } from "@testing-library/react";
import { parseDate } from "@utils/formatDatesHelpers";

import { Calendar } from ".";

describe("Calendar Component", () => {
  const renderCalendar = (props = {}) => render(<Calendar {...props} value={new Date(2024, 0, 5)} />);

  it("should render the calendar with the days view by default", () => {
    renderCalendar();
    expect(screen.getByText("January")).toBeInTheDocument();
    expect(screen.getByText("Mo")).toBeInTheDocument();
  });

  it("should switch to months view when month is clicked", () => {
    renderCalendar();
    fireEvent.click(screen.getByText("January"));
    expect(screen.getByText("2024")).toBeInTheDocument();
  });

  it("should switch to years view when year is clicked", () => {
    renderCalendar();
    fireEvent.click(screen.getByText("2024"));
    expect(screen.getByText("2016 - 2027")).toBeInTheDocument();
  });

  it("should go to the previous month when prev button is clicked", () => {
    renderCalendar();
    fireEvent.click(screen.getByTestId("prev-button"));
    expect(screen.getByText("December")).toBeInTheDocument();
  });

  it("should go to the next month when next button is clicked", () => {
    renderCalendar();
    fireEvent.click(screen.getByTestId("next-button"));
    expect(screen.getByText("February")).toBeInTheDocument();
  });

  it("should call onDateSelect when a date is clicked", () => {
    const onDateSelect = jest.fn();
    renderCalendar({ onDateSelect });

    fireEvent.click(screen.getByText("15"));
    expect(onDateSelect).toHaveBeenCalledWith(parseDate("15.01.2024"));
  });

  it("should call onRangeSelect when a date is clicked in range mode", () => {
    const onRangeSelect = jest.fn();
    renderCalendar({ isRange: true, onRangeSelect });

    fireEvent.click(screen.getByText("10"));
    expect(onRangeSelect).toHaveBeenCalledWith(parseDate("10.01.2024"), parseDate("10.01.2024"));
  });

  it("should not select a date outside of the minDate and maxDate range", () => {
    const onDateSelect = jest.fn();
    renderCalendar({
      onDateSelect,
      minDate: parseDate("05.01.2024"),
      maxDate: parseDate("20.01.2024"),
    });

    fireEvent.click(screen.getByText("25"));
    expect(onDateSelect).not.toHaveBeenCalled();
  });

  it("should highlight weekends if highlightWeekends is true", () => {
    const date = new Date(2024, 0, 4);
    renderCalendar({ value: date, highlightWeekends: true });
    const saturday = screen.getByText("6");
    expect(saturday).toHaveStyle(`color: ${theme.colors.red}`);
  });

  it("should highlight holidays if highlightHolidays is true", () => {
    const date = new Date(2024, 0, 4);
    const holidays = [{ date: new Date(2024, 0, 1), isRecurring: true }];
    renderCalendar({ value: date, holidays, highlightHolidays: true });

    const holidayElements = screen.getAllByText("1");
    const holidayElement = holidayElements.find((el) => el.closest('[data-month="0"]'));

    expect(holidayElement).toHaveStyle(`color: ${theme.colors.red}`);
  });
});
