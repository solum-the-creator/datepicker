import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  max-width: 250px;
  display: flex;
  align-items: center;

  gap: 0.5rem;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  padding: 0.8rem 1rem;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  border: none;

  font-size: 15px;
  color: ${({ theme }) => theme.colors.secondary};

  &:focus {
    outline: none;
  }
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
