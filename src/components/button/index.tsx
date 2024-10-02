import { StyledButton } from "@components/button/index.styled";

type ButtonProps = {
  label: string;
  primary?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ label, primary = false }) => (
  <StyledButton primary={primary}>{label}</StyledButton>
);
