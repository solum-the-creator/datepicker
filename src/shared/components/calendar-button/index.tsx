import { ThemeWrapper } from "@/shared/components/theme-wrapper";

import { CalendarButtonStyled } from "./calendar-button.styled";

type CalendarButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CalendarButton: React.FC<CalendarButtonProps> = ({ children, onClick }) => {
  return (
    <ThemeWrapper>
      <CalendarButtonStyled type="button" onClick={onClick}>
        {children}
      </CalendarButtonStyled>
    </ThemeWrapper>
  );
};
