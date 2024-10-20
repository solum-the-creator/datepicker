import { styled } from "styled-components";

export const ConfirmModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ConfirmModalContent = styled.div`
  width: 100%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: ${({ theme }) => theme.colors.background};

  padding: 2rem 1rem;
  border-radius: 0.5rem;
`;

export const ConfrirmTitle = styled.h2`
  font-size: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const ConfirmButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.hoverBackground};
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.activeBright};
  }
`;

export const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.muted};
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.activeBright};
  }
`;
