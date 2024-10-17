import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TodoCalendar } from ".";

describe("TodoCalendar Component", () => {
  const date = new Date(2024, 9, 10);

  const renderTodoCalendar = (props = {}) => render(<TodoCalendar value={date} {...props} />);

  it("should display 'Add tasks' button when no tasks are available for the selected date", () => {
    renderTodoCalendar();

    const addButton = screen.getByText("Add tasks");
    expect(addButton).toBeInTheDocument();
  });

  it("should open the modal when 'Add tasks' button is clicked", () => {
    renderTodoCalendar();

    const addButton = screen.getByText("Add tasks");
    fireEvent.click(addButton);

    expect(screen.getByText("Tasks for 10.10.2024")).toBeInTheDocument();
  });

  it("should add a new task to the list", async () => {
    renderTodoCalendar();

    const addButton = screen.getByText("Add tasks");
    fireEvent.click(addButton);

    const input = screen.getByPlaceholderText("Add a new task");
    const addTaskButton = screen.getByText("Add task");

    await userEvent.type(input, "Test task");
    fireEvent.click(addTaskButton);

    expect(screen.getByText("Test task")).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  it("should remove a task from the list", async () => {
    renderTodoCalendar();

    const addButton = screen.getByTestId("calendar-button");
    fireEvent.click(addButton);

    const input = screen.getByPlaceholderText("Add a new task");
    const addTaskButton = screen.getByText("Add task");

    await userEvent.type(input, "Task to be removed");
    fireEvent.click(addTaskButton);

    const taskItem = screen.getByText("Task to be removed");
    expect(taskItem).toBeInTheDocument();

    const removeButton = within(taskItem.closest("li")!).getByRole("button", { name: /remove/i });
    fireEvent.click(removeButton);

    const confirmButton = screen.getByTestId("confirm-button");
    fireEvent.click(confirmButton);

    expect(screen.queryByText("Task to be removed")).not.toBeInTheDocument();
  });

  it("should close the modal when 'Close' button is clicked", () => {
    renderTodoCalendar();

    const addButton = screen.getByTestId("calendar-button");
    fireEvent.click(addButton);

    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);

    expect(screen.queryByText("Tasks for 10.10.2024")).not.toBeInTheDocument();
  });

  it("should show existing tasks in the modal when 'View tasks' button is clicked", async () => {
    renderTodoCalendar({ value: new Date(2024, 9, 11) });

    const addButton = screen.getByText("Add tasks");
    fireEvent.click(addButton);

    const input = screen.getByPlaceholderText("Add a new task");
    const addTaskButton = screen.getByText("Add task");

    await userEvent.type(input, "Existing task");
    fireEvent.click(addTaskButton);

    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);

    const viewButton = screen.getByText("View tasks");
    fireEvent.click(viewButton);

    expect(screen.getByText("Tasks for 11.10.2024")).toBeInTheDocument();
    expect(screen.getByText("Existing task")).toBeInTheDocument();
  });
});
