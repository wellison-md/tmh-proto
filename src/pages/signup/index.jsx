import { useState } from "react";
import NavBar from "../../components/navBar";
import { getFromStorage, saveOnStorage } from "../../utils/localStorage";
import { getByProps } from "../../utils/fkdb/getFkData";
import { USER_TEMPLATE } from '../../utils/configs';
import { hash } from "bcryptjs";

export default function SignUp() {
  const [usrname, setUsrname] = useState('');
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const [status, setStatus] = useState('');

  const isActive = usrname.length >= 3
    && email.length >= 6
    && pswd.length >= 6

  const createUser = async (email, pswd, usrname) => {
    const users = getFromStorage('tmh-users');
    const emailAlreadyExist = getByProps(users, 'email', email);

    if (emailAlreadyExist) {
      setStatus('Este email não está disponível');
    }

    const newUser = {
      ...USER_TEMPLATE,
      id: users.length + 1,
      email,
      usrname,
      pswd: await hash(pswd, 10),
    };

    users.push(newUser);
    saveOnStorage('tmh-users', users);
    setStatus('');
  };

  return (
    <>
      <h1>Sign up</h1>
      <NavBar />
      <form onSubmit={ (e) => e.preventDefault() }>
        <input
          type='text'
          placeholder='Digite seu nome'
          onChange={ (e) => setUsrname(e.target.value) }
          value={ usrname }
          required
        />

        <input
          type='email'
          placeholder='Digite o seu melhor email'
          onChange={ (e) => setEmail(e.target.value) }
          value={ email }
          required
        />

        <input
          type='password'
          placeholder='Digite sua senha de acesso'
          onChange={ (e) => setPswd(e.target.value) }
          value={ pswd }
          required
        />

        <button
          type='button'
          disabled={ !isActive }
          onClick={ () => createUser(email, pswd, usrname)}
        >
          Cadastrar
        </button>

        {
          status
        }
      </form>
    </>
  );
}
