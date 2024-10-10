import { styled } from "styled-components";

export const TodoItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const TodoText = styled.p``;

export const RemoveButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;
