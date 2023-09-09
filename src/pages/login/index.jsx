import { useState } from "react";
import NavBar from "../../components/navBar";
import { Link } from "react-router-dom";
import { makeLogin } from "../../utils/login";
import { saveOnStorage } from "../../utils/localStorage";

export default function Login() {
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const [tryLogin, setTryLogin] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const isActive = email.length > 6 && pswd.length >= 6

  const checkLogin = async (email, pswd) => {
    setErrorMsg('');
    const req = await makeLogin(email, pswd);

    if (req.status === 'success') {
      return saveOnStorage('tmh-logged-user', req.payload);
    }

    setTryLogin(true);
    setErrorMsg(req.payload);
  };

  return (
    <>
      <h1>Login</h1>
      <NavBar />
      <form onSubmit={ (e) => e.preventDefault() }>
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
          onClick={ () => checkLogin(email, pswd) }
        >Login</button>

        {
          tryLogin && <p>{ errorMsg }</p>
        }
      </form>

      <br /><hr></hr>
      <p>Ainda não tem uma conta? <Link to='/signup'><button>Registre agora</button></Link></p>
    </>
  );
}
