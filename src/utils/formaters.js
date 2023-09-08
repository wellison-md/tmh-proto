export const formatDateToView = (date) => {
  const convertDate = new Date(date);
  return convertDate.toLocaleString('pt-BR', { dateStyle: 'short' });
};

export const formatAge = (age) => {
  if (age === 'unknown' || !age) return 'idade desconhecida';

  const ageWithoutMeasure = age?.replace('yo', '');
  const splitAge = ageWithoutMeasure?.split('.');
  const years = splitAge[0];
  const lastDigit = Number(`0.${splitAge[1]}`) * 12;

  if (isNaN(lastDigit)) return `${years} anos`;

  return `${years} ano(s) e ${lastDigit.toFixed(0)} mes(es)`;
};

formatAge('2.5yo');

export const formatCategory = (cat) => {
  switch (cat) {
    case 'cat':
      return 'Felinos';
    case 'dog':
      return 'Cachorros';
    case 'bird':
      return 'Pássaros';
    case 'wild':
      return 'Silvestres';
  }
};

export const formatGender = (gender) => {
  if (gender === 'female') {
    return 'fêmea';
  }
  return 'macho';
};
