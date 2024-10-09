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
