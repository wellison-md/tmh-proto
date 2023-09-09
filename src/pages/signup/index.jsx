import { useState } from "react";
import NavBar from "../../components/navBar";

export default function SignUp() {
  const [usrname, setUsrname] = useState('');
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');

  const isActive = usrname.length >= 3
    && email.length > 6
    && pswd.length >= 6

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
        >
          Cadastrar
        </button>
      </form>
    </>
  );
}
