import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { parseDate } from "@utils/formatDatesHelpers";

import RangeCalendar from ".";

describe("RangeCalendar Component", () => {
  const rangeStart = new Date(2024, 9, 10);
  const rangeEnd = new Date(2024, 9, 20);

  const renderRangeCalendar = (props = {}) =>
    render(<RangeCalendar rangeStart={rangeStart} rangeEnd={rangeEnd} {...props} />);

  it("should open start date calendar when start input is focused", () => {
    renderRangeCalendar();

    const startInput = screen.getByPlaceholderText("Start date");
    fireEvent.focus(startInput);

    expect(screen.getByTestId("calendar-container")).toBeInTheDocument();
  });

  it("should open end date calendar when end input is focused", () => {
    renderRangeCalendar();

    const endInput = screen.getByPlaceholderText("End date");
    fireEvent.focus(endInput);

    expect(screen.getByTestId("calendar-container")).toBeInTheDocument();
  });

  it("should select a start and end date from the calendar and display them in the inputs", () => {
    const onRangeSelect = jest.fn();
    renderRangeCalendar({ onRangeSelect });

    const startInput = screen.getByPlaceholderText("Start date");
    fireEvent.focus(startInput);

    const startDateToSelect = screen.getByText("12");
    fireEvent.click(startDateToSelect);

    expect(startInput).toHaveValue("12.10.2024");
    expect(onRangeSelect).toHaveBeenCalledWith(parseDate("12.10.2024"), rangeEnd);

    const endInput = screen.getByPlaceholderText("End date");
    fireEvent.focus(endInput);

    const endDateToSelect = screen.getByText("22");
    fireEvent.click(endDateToSelect);

    expect(endInput).toHaveValue("22.10.2024");
    expect(onRangeSelect).toHaveBeenCalledWith(rangeStart, parseDate("22.10.2024"));
  });

  it("should validate dates when entered manually", () => {
    const minDate = new Date(2024, 9, 1);
    const maxDate = new Date(2024, 9, 31);

    const onRangeSelect = jest.fn();
    renderRangeCalendar({ onRangeSelect, minDate, maxDate });

    const startInput = screen.getByPlaceholderText("Start date");
    const endInput = screen.getByPlaceholderText("End date");

    fireEvent.change(startInput, { target: { value: "11.10.2024" } });
    expect(onRangeSelect).toHaveBeenCalledWith(parseDate("11.10.2024"), rangeEnd);

    fireEvent.change(endInput, { target: { value: "15.11.2024" } });
    expect(onRangeSelect).not.toHaveBeenCalledWith(parseDate("11.10.2024"), parseDate("15.11.2024"));
  });

  it("should close calendar when clicked outside", async () => {
    renderRangeCalendar();

    const startInput = screen.getByPlaceholderText("Start date");
    fireEvent.focus(startInput);

    expect(screen.getByTestId("calendar-container")).toBeInTheDocument();

    await userEvent.click(document.body);

    expect(screen.queryByTestId("calendar-container")).not.toBeInTheDocument();
  });
});
