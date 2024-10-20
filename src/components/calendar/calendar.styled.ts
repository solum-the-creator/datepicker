import styled from "styled-components";

export const CalendarContainer = styled.div<{ $withTodo?: boolean }>`
  padding: 10px;
  width: 250px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ $withTodo }) => ($withTodo ? "0.5rem 0.5rem 0 0" : "0.5rem")};
  background-color: ${({ theme }) => theme.colors.background};
`;
