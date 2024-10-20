import { styled } from "styled-components";

export const CalendarButtonStyled = styled.button`
  width: 250px;
  padding: 0.6rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0 0 0.5rem 0.5rem;
`;
