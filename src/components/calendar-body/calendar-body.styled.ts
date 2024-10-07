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
  grid-auto-rows: 32px;
`;

export const DayCell = styled.button<{
  $isCurrentMonth: boolean;
  $isToday: boolean;
  $isWeekend: boolean;
  $isHoliday: boolean;
  $isSelected?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme, $isCurrentMonth, $isWeekend, $isHoliday, $isSelected }) => {
    switch (true) {
      case $isSelected:
        return theme.colors.activeText;
      case $isCurrentMonth && $isWeekend:
        return theme.colors.red;
      case $isCurrentMonth && $isHoliday:
        return theme.colors.red;
      case !$isCurrentMonth:
        return theme.colors.disabledText;
      default:
        return theme.colors.secondary;
    }
  }};

  background-color: ${({ theme, $isToday, $isSelected }) => {
    switch (true) {
      case $isSelected:
        return theme.colors.active;
      case $isToday:
        return theme.colors.hoverBackground;
      default:
        return "transparent";
    }
  }};
  border: none;
  border-radius: 8px;

  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme, $isSelected }) => !$isSelected && theme.colors.hoverBackground};
  }
`;
