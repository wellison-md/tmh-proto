export const formatDateToView = (date) => {
  const convertDate = new Date(date);
  return convertDate.toLocaleString('pt-BR', { dateStyle: 'short' });
};
