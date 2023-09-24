export const saveOnStorage = (key, payload) => {
  localStorage.setItem(key, JSON.stringify(payload));
};

export const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const checkInitialStorage = (key, payload) => {
  if (localStorage.getItem(key) === null) {
    saveOnStorage(key, payload);
  }
  return;
};

export const checkLoggedUser = () => {
  if (localStorage.getItem('tmh-logged-user') === null) {
    return false;
  }
  return true;
}
