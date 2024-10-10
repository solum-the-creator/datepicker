export const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export const parseDate = (dateString: string): Date | null => {
  const parts = dateString.split(".");
  if (parts.length !== 3) {
    return null;
  }

  const day = parseInt(parts[0] ?? "", 10);
  const month = parseInt(parts[1] ?? "", 10) - 1;
  const year = parseInt(parts[2] ?? "", 10);

  const date = new Date(year, month, day);
  return date.getDate() === day ? date : null;
};

export const formatDateInputValue = (value: string) => {
  const numericValue = value.replace(/\D/g, "");

  if (numericValue.length <= 2) {
    return numericValue;
  }

  if (numericValue.length <= 4) {
    return `${numericValue.slice(0, 2)}.${numericValue.slice(2)}`;
  }

  return `${numericValue.slice(0, 2)}.${numericValue.slice(2, 4)}.${numericValue.slice(4)}`;
};
