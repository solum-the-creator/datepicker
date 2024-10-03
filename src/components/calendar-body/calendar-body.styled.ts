import styled from "styled-components";

export const CalendarBodyContainer = styled.div``;

export const WeekDaysHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 32px;
`;

export const WeekDayCell = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

export const DatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 32px);
`;

export const DayCell = styled.button<{ isCurrentMonth: boolean; isToday: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme, isCurrentMonth }) =>
    isCurrentMonth ? theme.colors.secondary : theme.colors.disabledText};

  background-color: ${({ theme, isToday }) => (isToday ? theme.colors.hoverBackground : "transparent")};
  border: none;
  border-radius: 8px;

  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBackground};
  }
`;
