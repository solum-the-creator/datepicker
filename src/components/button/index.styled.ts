import styled from "styled-components";

export const StyledButton = styled.button<{ primary?: boolean }>`
  background-color: ${({ primary }) => (primary ? "#007bff" : "#ccc")};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: ${({ primary }) => (primary ? "#0056b3" : "#999")};
  }
`;
