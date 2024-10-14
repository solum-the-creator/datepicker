import { styled } from "styled-components";

export const TodoListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  height: 10rem;
  overflow: auto;

  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.border};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.disabledText};
  }
`;
