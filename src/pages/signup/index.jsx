import { useContext, useState } from 'react';
import { checkLoggedUser, getFromStorage, saveOnStorage } from '../../utils/localStorage';
import { getByProps } from '../../utils/fkdb/getFkData';
import { USER_TEMPLATE } from '../../utils/constants';
import { LabelAlert, SignupForm } from './signupStyle';
import { hash } from 'bcryptjs';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Swal from 'sweetalert2';
import Store from '../../context/store';

export default function SignUp() {
  const [usrname, setUsrname] = useState('');
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const [status, setStatus] = useState('');
  const { setLoggedUser } = useContext(Store);

  const isActive = usrname.length >= 3
    && email.length >= 6
    && pswd.length >= 6

  const createUser = async (email, pswd, usrname) => {
    const users = getFromStorage('tmh-users');
    const emailAlreadyExist = getByProps(users, 'email', email);

    console.log({ users, emailAlreadyExist })
    if (emailAlreadyExist.email) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Este email não está disponível',
        showConfirmButton: false,
        timer: 1600
      });

      return setStatus('Este email não está disponível');
    }

    const newUser = {
      ...USER_TEMPLATE,
      id: users.length + 1,
      email,
      usrname,
      avatar: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 8)}.jpg`,
      pswd: await hash(pswd, 10),
    };

    users.push(newUser);
    saveOnStorage('tmh-users', users);
    saveOnStorage('tmh-logged-user', newUser);
    setLoggedUser(checkLoggedUser());

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Bem vindo ${usrname}`,
      showConfirmButton: false,
      timer: 1200
    });
  };

  return (
    <>
      <Header />
      <SignupForm onSubmit={ (e) => e.preventDefault() }>
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

        { status && <LabelAlert>{ status }</LabelAlert> }
      </SignupForm>
      <Footer />
    </>
  );
}
