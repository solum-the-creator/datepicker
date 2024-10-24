import { Todo } from "@/shared/types/todo";

import { TodoItem } from "./todo-item";
import { TodoListStyled } from "./todo-list.styled";

type TodoListProps = {
  todos: Todo[];
  onTodoRemove: (todoId: string) => void;
};

export const TodoList: React.FC<TodoListProps> = ({ todos, onTodoRemove }) => {
  return (
    <TodoListStyled>
      {todos.map(({ id, text }) => (
        <TodoItem key={id} id={id} text={text} onTodoRemove={onTodoRemove} />
      ))}
    </TodoListStyled>
  );
};
