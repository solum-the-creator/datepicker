import styled from "styled-components";

export const TodoModalContent = styled.div`
  width: 100%;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.colors.background};

  padding: 2rem 1rem;
  border-radius: 0.5rem;
`;

export const ModalTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const TodoInputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.2rem;
`;

export const TodoInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
`;

export const AddButton = styled.button`
  border: none;
  width: 6rem;
  border-radius: 0.5rem;
  padding: 0.5rem;

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.active};
  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverButton};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.muted};
    cursor: auto;
  }
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;

export const CloseButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.hoverBackground};
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.activeBright};
  }
`;

export const EmptyTodosList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 10rem;

  font-size: 1rem;
  font-weight: 500;
`;
