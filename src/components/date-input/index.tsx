import { CalendarIcon } from "@components/icons/calendar-icon";
import { CloseIcon } from "@components/icons/close-icon";
import { ThemeWrapper } from "@components/theme-wrapper";
import { formatDateInputValue } from "@utils/formatDatesHelpers";

import { ClearButton, IconContainer, Input, InputContainer } from "./date-input.styled";

type DateInputProps = {
  value: string;
  isError?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onClear?: () => void;
};

export const DateInput: React.FC<DateInputProps> = ({ value, isError, onChange, onFocus, onClear }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatDateInputValue(e.target.value);

    onChange?.({ ...e, target: { ...e.target, value: formattedValue } });
  };

  return (
    <ThemeWrapper>
      <InputContainer $isError={isError}>
        <IconContainer>
          <CalendarIcon />
        </IconContainer>
        <Input
          type="text"
          placeholder="Choose date"
          autoComplete="off"
          onChange={handleInputChange}
          onFocus={onFocus}
          value={value}
        />
        {value && (
          <ClearButton onClick={onClear}>
            <CloseIcon />
          </ClearButton>
        )}
      </InputContainer>
    </ThemeWrapper>
  );
};
