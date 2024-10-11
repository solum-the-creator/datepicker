import { useEffect, useState } from "react";

import { CalendarButton } from "@/shared/components/calendar-button";
import { TodoModal } from "@/shared/components/todo-modal";
import { Todo, TodoStorage } from "@/shared/types/todo";

type WithTodoLogicProps = {
  value?: Date;
  onDateSelect?: (value?: Date) => void;
};

export function withTodoLogic<P extends WithTodoLogicProps>(WrappedComponent: React.ComponentType<P>) {
  return (props: Omit<P, keyof WithTodoLogicProps> & WithTodoLogicProps) => {
    const { value, onDateSelect, ...rest } = props;

    const [todos, setTodos] = useState<Todo[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        const parsedTodos: TodoStorage[] = JSON.parse(storedTodos) as TodoStorage[];
        const todosWithDate = parsedTodos.map((todo) => ({
          ...todo,
          date: new Date(todo.date),
        }));
        setTodos(todosWithDate);
      }
    }, []);

    useEffect(() => {
      const todosToStore: TodoStorage[] = todos.map((todo) => ({
        ...todo,
        date: todo.date.toISOString(),
      }));
      localStorage.setItem("todos", JSON.stringify(todosToStore));
    }, [todos]);

    const handleTodoAdd = (text: string, date?: Date) => {
      if (!date) return;

      const newTodo: Todo = {
        id: String(new Date().getTime()),
        text,
        date,
      };
      setTodos([...todos, newTodo]);
    };

    const handleTodoRemove = (taskId: string) => {
      setTodos(todos.filter((todo) => todo.id !== taskId));
    };

    const todosForSelectedDate = todos.filter((todo) => todo.date.toDateString() === value?.toDateString());

    return (
      <>
        <WrappedComponent {...(rest as P)} value={value} onDateSelect={onDateSelect} />

        <CalendarButton onClick={() => setIsModalOpen(true)}>
          {todosForSelectedDate.length > 0 ? "View tasks" : "Add tasks"}
        </CalendarButton>

        <TodoModal
          isOpen={isModalOpen}
          date={value}
          todos={todosForSelectedDate}
          onClose={() => setIsModalOpen(false)}
          onTodoAdd={handleTodoAdd}
          onTodoRemove={handleTodoRemove}
        />
      </>
    );
  };
}
