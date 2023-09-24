import { compare } from 'bcryptjs';
import { getFromStorage } from './localStorage';
import { getByProps } from './fkdb/getFkData';

export const makeLogin = async (email, pswd) => {
  const users = getFromStorage('tmh-users');
  const userDb = getByProps(users, 'email', email);
  const validPswd = await compare(String(pswd), String(userDb.pswd));

  if (userDb.email === email && validPswd) {
    return { status: 'success', payload: userDb };
  }

  return { status: 'fail', payload: 'Email ou senha incorretos. Tente novamente' };
};

export const makeLogout = () => {
  localStorage.removeItem('tmh-logged-user');
};
