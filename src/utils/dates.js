export const splitDate = (stringDate = '') => {
  const [ year, month, day ] = stringDate.split('-');

  const numericYear = parseInt(year);
  const numericMonth = parseInt(month);
  const numericDay = parseInt(day);

  return { day: numericDay, month: numericMonth, year: numericYear };
};

export const isInDateInterval = (initialDate = '', finalDate = '', target = {}) => {
  const initial = splitDate(initialDate);
  const final = splitDate(finalDate);
  const dateTarget = splitDate(target);

  const isInYear =  dateTarget.year >= initial.year && dateTarget.year <= final.year;
  const isInMonth = dateTarget.month >= initial.month && dateTarget.month <= final.month;
  const isInDay = dateTarget.day >= initial.day && dateTarget.day <= final.day;

  return isInYear && isInMonth && isInDay;
};
