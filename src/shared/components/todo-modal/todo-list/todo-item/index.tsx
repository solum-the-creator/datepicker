import { useState } from "react";

import { ConfirmModal } from "@/shared/components/confirm-modal";

import { RemoveButton, TodoItemStyled, TodoText } from "./todo-item.styled";

type TodoItemProps = {
  id: string;
  text: string;
  onTodoRemove: (todoId: string) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({ id, text, onTodoRemove }) => {
  const [isDelete, setIsDelete] = useState(false);

  const handleDeleteClick = () => {
    setIsDelete(true);
  };

  const handleConfirmRemove = () => {
    onTodoRemove(id);
  };

  const handleCancelRemove = () => {
    setIsDelete(false);
  };

  return (
    <TodoItemStyled>
      <TodoText>{text}</TodoText>
      <RemoveButton onClick={handleDeleteClick}>Remove</RemoveButton>

      {isDelete && (
        <ConfirmModal
          title="Do you want to delete this task?"
          onConfirm={handleConfirmRemove}
          onCancel={handleCancelRemove}
        />
      )}
    </TodoItemStyled>
  );
};
