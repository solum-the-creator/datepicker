import { useRef } from "react";

import { useClickOutside } from "@/shared/hooks/useClickOutside";

import {
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
  ConfirmModalContainer,
  ConfirmModalContent,
  ConfrirmTitle,
} from "./confirm-modal.styled";

type ConfirmModalProps = {
  title?: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export const ConfirmModal: React.FC<ConfirmModalProps> = ({ title, onCancel, onConfirm }) => {
  const confirmRef = useRef<HTMLDivElement>(null);
  useClickOutside(confirmRef, onCancel);

  return (
    <ConfirmModalContainer>
      <ConfirmModalContent ref={confirmRef}>
        <ConfrirmTitle>{title}</ConfrirmTitle>
        <ButtonsContainer>
          <ConfirmButton data-testid="confirm-button" onClick={onConfirm}>
            Yes
          </ConfirmButton>
          <CancelButton data-testid="cancel-button" onClick={onCancel}>
            Cancel
          </CancelButton>
        </ButtonsContainer>
      </ConfirmModalContent>
    </ConfirmModalContainer>
  );
};
