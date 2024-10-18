import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MonthYearText = styled.div`
  text-align: center;
  font-weight: 700;

  display: flex;
  gap: 0.4rem;
`;

export const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.active};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.border};
    cursor: auto;
  }
`;

export const TextButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;

  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.active};
  }
`;
