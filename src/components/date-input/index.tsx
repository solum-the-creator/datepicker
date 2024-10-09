import { forwardRef } from "react";

import { Input, InputContainer } from "./date-input.styled";

type DateInputProps = {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
};

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(({ value, onChange, onFocus }, ref) => {
  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="dd.mm.yyyy"
        autoComplete="off"
        pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
        ref={ref}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
      />
    </InputContainer>
  );
});
