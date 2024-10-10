import { Todo } from "@customTypes/todo";

import { TodoItem } from "./todo-item";
import { TodoListStyled } from "./todo-list.styled";

type TodoListProps = {
  todos: Todo[];
  onTodoRemove: (todoId: string) => void;
};

export const TodoList: React.FC<TodoListProps> = ({ todos, onTodoRemove }) => {
  return (
    <TodoListStyled>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} onTodoRemove={onTodoRemove} />
      ))}
    </TodoListStyled>
  );
};
