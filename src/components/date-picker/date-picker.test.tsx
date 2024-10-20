import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { parseDate } from "@utils/formatDatesHelpers";

import DatePicker from ".";

describe("DatePicker Component", () => {
  const date = new Date(2024, 9, 10);
  const renderDatePicker = (props = {}) => render(<DatePicker value={date} {...props} />);

  it("should open calendar when input is focused", () => {
    renderDatePicker();

    const input = screen.getByPlaceholderText("Select date");
    fireEvent.focus(input);

    expect(screen.getByTestId("calendar-container")).toBeInTheDocument();
  });

  it("should select a date from the calendar and display it in the input", () => {
    const onDateSelect = jest.fn();
    renderDatePicker({ onDateSelect });

    const input = screen.getByPlaceholderText("Select date");
    fireEvent.focus(input);

    const dateToSelect = screen.getByText("15");
    fireEvent.click(dateToSelect);

    expect(input).toHaveValue("15.10.2024");
    expect(onDateSelect).toHaveBeenCalledWith(parseDate("15.10.2024"));
  });

  it("should clear the selected date when clear button is clicked", () => {
    const onDateSelect = jest.fn();
    renderDatePicker({ value: parseDate("15.10.2024"), onDateSelect });

    const input = screen.getByPlaceholderText("Select date");
    expect(input).toHaveValue("15.10.2024");

    const clearButton = screen.getByTestId("clear-button");
    fireEvent.click(clearButton);

    expect(input).toHaveValue("");
    expect(onDateSelect).toHaveBeenCalledWith(undefined);
  });

  it("should validate date when entered manually", () => {
    const minDate = new Date(2024, 9, 1);
    const maxDate = new Date(2024, 9, 31);

    const onDateSelect = jest.fn();
    renderDatePicker({ onDateSelect, minDate, maxDate });

    const input = screen.getByPlaceholderText("Select date");

    fireEvent.change(input, { target: { value: "11.10.2024" } });
    expect(onDateSelect).toHaveBeenCalledWith(parseDate("11.10.2024"));

    fireEvent.change(input, { target: { value: "15.11.2024" } });
    expect(onDateSelect).not.toHaveBeenCalledWith(parseDate("15.11.2024"));
  });

  it("should close calendar when clicked outside", async () => {
    renderDatePicker();

    const input = screen.getByPlaceholderText("Select date");
    fireEvent.focus(input);

    expect(screen.getByTestId("calendar-container")).toBeInTheDocument();

    await userEvent.click(document.body);

    expect(screen.queryByTestId("calendar-container")).not.toBeInTheDocument();
  });
});
