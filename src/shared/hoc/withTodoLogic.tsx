import { useState } from "react";
import { Todo } from "@customTypes/todo";

import { CalendarButton } from "@/shared/components/calendar-button";
import { TodoModal } from "@/shared/components/todo-modal";

import { useTodos } from "../hooks/useTodos";

type WithTodoLogicProps = {
  value?: Date;
  withTodo?: boolean;
  todos?: Todo[];
  onDateSelect?: (value?: Date) => void;
};

export function withTodoLogic<P extends WithTodoLogicProps>(WrappedComponent: React.ComponentType<P>) {
  return (props: Omit<P, keyof WithTodoLogicProps> & WithTodoLogicProps) => {
    const { value, onDateSelect, ...rest } = props;

    const { todos, addTodo, removeTodo } = useTodos();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTodoAdd = (text: string, date?: Date) => {
      if (!date) return;
      addTodo(text, date);
    };

    const todosForSelectedDate = todos.filter((todo) => todo.date.toDateString() === value?.toDateString());

    return (
      <>
        <WrappedComponent
          {...(rest as P)}
          value={value}
          todos={todos}
          withTodo={true}
          onDateSelect={onDateSelect}
        />

        {value && (
          <CalendarButton onClick={() => setIsModalOpen(true)}>
            {todosForSelectedDate.length > 0 ? "View tasks" : "Add tasks"}
          </CalendarButton>
        )}

        <TodoModal
          isOpen={isModalOpen}
          date={value}
          todos={todosForSelectedDate}
          onClose={() => setIsModalOpen(false)}
          onTodoAdd={handleTodoAdd}
          onTodoRemove={removeTodo}
        />
      </>
    );
  };
}
