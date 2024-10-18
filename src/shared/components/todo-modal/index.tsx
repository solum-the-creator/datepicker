import { useRef, useState } from "react";

import { useClickOutside } from "@/shared/hooks/useClickOutside";
import { Todo } from "@/shared/types/todo";

import { ModalContainer } from "../modal-container";

import { TodoList } from "./todo-list";
import {
  AddButton,
  CloseButton,
  CloseButtonContainer,
  EmptyTodosList,
  ModalTitle,
  TodoInput,
  TodoInputContainer,
  TodoModalContent,
} from "./todo-modal.styled";

type TodoModalProps = {
  isOpen: boolean;
  date?: Date;
  todos: Todo[];
  onClose: () => void;
  onTodoAdd: (text: string, date?: Date) => void;
  onTodoRemove: (taskId: string) => void;
};

export const TodoModal: React.FC<TodoModalProps> = ({
  isOpen,
  date,
  todos,
  onClose,
  onTodoAdd,
  onTodoRemove,
}) => {
  const [inputValue, setInputValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, onClose);

  const maxLength = 50;

  const handleTodoAdd = (text: string, date?: Date) => {
    if (text.length <= maxLength) {
      onTodoAdd(text, date);
      setInputValue("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= maxLength) {
      setInputValue(e.target.value);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <TodoModalContent ref={ref}>
        <ModalTitle>Tasks for {date?.toLocaleDateString()}</ModalTitle>

        <TodoInputContainer>
          <TodoInput
            type="text"
            maxLength={maxLength}
            placeholder="Add a new task"
            value={inputValue}
            onChange={handleInputChange}
          />
          <AddButton onClick={() => handleTodoAdd(inputValue, date)} disabled={!inputValue}>
            Add task
          </AddButton>
        </TodoInputContainer>

        {todos.length === 0 ? (
          <EmptyTodosList>Your task list is empty</EmptyTodosList>
        ) : (
          <TodoList todos={todos} onTodoRemove={onTodoRemove} />
        )}

        <CloseButtonContainer>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </CloseButtonContainer>
      </TodoModalContent>
    </ModalContainer>
  );
};
