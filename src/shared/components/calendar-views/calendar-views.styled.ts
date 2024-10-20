import { styled } from "styled-components";

export const CalendarCell = styled.button<{
  $isSelected?: boolean;
  $isDisabled?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 8px;

  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  color: ${({ theme, $isSelected, $isDisabled }) => {
    switch (true) {
      case $isDisabled:
        return theme.colors.disabledText;
      case $isSelected:
        return theme.colors.activeText;
      default:
        return theme.colors.secondary;
    }
  }};

  background-color: ${({ theme, $isSelected }) => {
    switch (true) {
      case $isSelected:
        return theme.colors.active;
      default:
        return "transparent";
    }
  }};

  &:hover {
    background-color: ${({ theme, $isSelected }) => !$isSelected && theme.colors.hoverBackground};
  }

  &:disabled {
    cursor: auto;
    background-color: transparent;
  }
`;
