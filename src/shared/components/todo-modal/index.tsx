import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { ThemeWrapper } from "@/shared/components/theme-wrapper";
import { Todo } from "@/shared/types/todo";

import { TodoList } from "./todo-list";
import {
  AddButton,
  CloseButton,
  CloseButtonContainer,
  ModalTitle,
  TodoInput,
  TodoInputContainer,
  TodoModalContainer,
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
  const [modalContainer] = useState(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(modalContainer);

    return () => {
      document.body.removeChild(modalContainer);
    };
  }, [modalContainer]);

  const handleTodoAdd = (text: string, date?: Date) => {
    onTodoAdd(text, date);
    setInputValue("");
  };

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <ThemeWrapper>
      <TodoModalContainer>
        <TodoModalContent>
          <ModalTitle>Tasks for {date?.toLocaleDateString()}</ModalTitle>

          <TodoInputContainer>
            <TodoInput
              type="text"
              placeholder="Add a new task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <AddButton onClick={() => handleTodoAdd(inputValue, date)} disabled={!inputValue}>
              Add task
            </AddButton>
          </TodoInputContainer>

          <TodoList todos={todos} onTodoRemove={onTodoRemove} />

          <CloseButtonContainer>
            <CloseButton onClick={onClose}>Close</CloseButton>
          </CloseButtonContainer>
        </TodoModalContent>
      </TodoModalContainer>
    </ThemeWrapper>,
    modalContainer
  );
};
