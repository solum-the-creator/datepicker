import { styled } from "styled-components";

export const CalendarBodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 32px;

  row-gap: 1rem;
  column-gap: 0.5rem;
`;
