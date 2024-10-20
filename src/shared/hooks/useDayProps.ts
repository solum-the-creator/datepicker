import { CalendarDay } from "@customTypes/days";
import { Todo } from "@customTypes/todo";
import { isDateWithinRange, isSameDate } from "@utils/dateHelpers";

type DayProps = {
  selectedDate?: Date;
  rangeStart?: Date;
  rangeEnd?: Date;
  withTodos: boolean;
  todos: Todo[];
  highlightWeekends: boolean;
  highlightHolidays: boolean;
  onDateSelect?: (date: Date) => void;
};

export const useDayProps = ({
  selectedDate,
  rangeStart,
  rangeEnd,
  withTodos,
  todos,
  highlightWeekends,
  highlightHolidays,
}: DayProps) => {
  const getDayProps = ({
    day,
    month,
    year,
    isCurrentMonth,
    isToday,
    isDisabled,
    isHoliday,
    isWeekend,
  }: CalendarDay) => {
    const currentDate = new Date(year, month, day);
    const isSelected = selectedDate && isSameDate(selectedDate, currentDate);
    const isRangeStart = rangeStart && isSameDate(rangeStart, currentDate);
    const isRangeEnd = rangeEnd && isSameDate(rangeEnd, currentDate);
    const isInRange = rangeStart && rangeEnd && isDateWithinRange(currentDate, rangeStart, rangeEnd);
    const hasTask = withTodos && todos.some((todo) => isSameDate(todo.date, currentDate));

    return {
      role: "gridcell",
      disabled: isDisabled,
      $isCurrentMonth: isCurrentMonth,
      $isToday: isToday,
      $isWeekend: highlightWeekends && isWeekend,
      $isHoliday: highlightHolidays && isHoliday,
      $isSelected: isSelected,
      $isInRange: isInRange,
      $isRangeStart: isRangeStart,
      $isRangeEnd: isRangeEnd,
      $isDisabled: isDisabled,
      $hasTask: hasTask,
    };
  };

  return getDayProps;
};
