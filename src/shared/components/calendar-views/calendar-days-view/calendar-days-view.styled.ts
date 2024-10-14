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
  $isCurrentMonth?: boolean;
  $isToday?: boolean;
  $isWeekend?: boolean;
  $isHoliday?: boolean;
  $isDisabled?: boolean;
  $isSelected?: boolean;
  $isInRange?: boolean;
  $isRangeStart?: boolean;
  $isRangeEnd?: boolean;
  $hasTask?: boolean;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({
    theme,
    $isCurrentMonth,
    $isWeekend,
    $isHoliday,
    $isSelected,
    $isDisabled,
    $isInRange,
    $isRangeStart,
    $isRangeEnd,
  }) => {
    switch (true) {
      case $isDisabled:
        return theme.colors.disabledText;
      case $isSelected || $isRangeStart || $isRangeEnd:
        return theme.colors.activeText;
      case $isInRange:
        return theme.colors.active;
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

  background-color: ${({ theme, $isToday, $isSelected, $isInRange, $isRangeStart, $isRangeEnd }) => {
    switch (true) {
      case $isSelected || $isRangeEnd:
        return theme.colors.active;
      case $isRangeStart:
        return theme.colors.activeBright;
      case $isRangeEnd:
        return theme.colors.activeBright;
      case $isInRange:
        return theme.colors.range;
      case $isToday:
        return theme.colors.hoverBackground;
      default:
        return "transparent";
    }
  }};
  border: none;
  border-radius: ${({ theme, $isRangeStart, $isRangeEnd, $isInRange }) => {
    switch (true) {
      case $isRangeStart:
        return theme.bordersRadius.rangeStart;
      case $isRangeEnd:
        return theme.bordersRadius.rangeEnd;
      case $isInRange:
        return theme.bordersRadius.range;
      default:
        return "0.5rem";
    }
  }};

  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  &::before {
    content: "";
    display: block;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 0.5rem;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.active};
    bottom: 0.2rem;
    left: calc(50% - 0.125rem);
    z-index: -1;
    opacity: ${({ $hasTask }) => ($hasTask ? "0.5" : "0")};
  }

  &:hover {
    background-color: ${({ theme, $isSelected, $isRangeStart, $isRangeEnd }) =>
      !$isSelected && !$isRangeStart && !$isRangeEnd && theme.colors.hoverBackground};
  }

  &:disabled {
    cursor: auto;
    background-color: transparent;
  }
`;
