import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const InputContainer = styled.div<{ $isError?: boolean }>`
  width: 100%;
  max-width: 250px;
  display: flex;
  align-items: center;

  gap: 0.5rem;

  border: 1px solid;
  border-radius: 0.5rem;
  padding: 0.8rem 1rem;

  border-color: ${({ theme, $isError }) => ($isError ? theme.colors.red : theme.colors.border)};

  &:focus-within {
    border: 1px solid ${({ $isError, theme }) => ($isError ? theme.colors.red : theme.colors.primary)};
  }
`;

export const Input = styled.input<{ $isError?: boolean }>`
  width: 100%;
  font-size: 1rem;
  border: none;

  font-size: 15px;
  color: ${({ theme }) => theme.colors.secondary};

  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
