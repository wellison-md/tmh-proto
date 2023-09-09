import { useState } from "react";
import NavBar from "../../components/navBar";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');

  const isActive = email.length > 6 && pswd.length >= 6

  return (
    <>
      <h1>Login</h1>
      <NavBar />
      <form>
        <input
          type='email'
          placeholder='Digite seu email'
          onChange={ (e) => setEmail(e.target.value) }
          value={ email }
          required
        />

        <input
          type='password'
          placeholder='Digite sua senha'
          onChange={ (e) => setPswd(e.target.value) }
          value={ pswd }
          required
        />

        <button
          type='button'
          disabled={ !isActive }
        >Login</button>

      </form>

      <br /><hr></hr>
      <p>Ainda não tem uma conta? <Link to=''><button>Registre agora</button></Link></p>
    </>
  );
}
