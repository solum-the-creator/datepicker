import { RemoveButton, TodoItemStyled, TodoText } from "./todo-item.styled";

type TodoItemProps = {
  id: string;
  text: string;
  onTodoRemove: (todoId: string) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({ id, text, onTodoRemove }) => {
  return (
    <TodoItemStyled>
      <TodoText>{text}</TodoText>
      <RemoveButton onClick={() => onTodoRemove(id)}>Remove</RemoveButton>
    </TodoItemStyled>
  );
};
