import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { StyledModalContainer } from "./modal-container.styled";

type ModalContainerProps = {
  children: React.ReactNode;
};

export const ModalContainer: React.FC<ModalContainerProps> = ({ children }) => {
  const [modalContainer] = useState(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(modalContainer);

    return () => {
      document.body.removeChild(modalContainer);
    };
  }, [modalContainer]);

  return createPortal(<StyledModalContainer>{children}</StyledModalContainer>, modalContainer);
};
