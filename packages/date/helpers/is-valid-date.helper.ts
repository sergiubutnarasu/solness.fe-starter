export const isValidDate = (date: string) => {
  try {
    return new Date(date).toString() !== 'Invalid Date';
  } catch {
    return false;
  }
};
