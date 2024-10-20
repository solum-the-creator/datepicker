import { CalendarButtonStyled } from "./calendar-button.styled";

type CalendarButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CalendarButton: React.FC<CalendarButtonProps> = ({ children, onClick }) => {
  return (
    <CalendarButtonStyled data-testid="calendar-button" onClick={onClick}>
      {children}
    </CalendarButtonStyled>
  );
};
