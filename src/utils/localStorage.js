export const saveOnStorage = (key, payload) => {
  localStorage.setItem(key, JSON.stringify(payload));
};

export const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};
