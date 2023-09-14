import { useState } from "react";
import { Link } from "react-router-dom";
import { makeLogin } from "../../utils/login";
import { saveOnStorage } from "../../utils/localStorage";
import Header from "../../components/header";
import Footer from '../../components/footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const [tryLogin, setTryLogin] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const isActive = email.length > 6 && pswd.length >= 6

  const checkLogin = async (email, pswd) => {
    const req = await makeLogin(email, pswd);

    if (req.status === 'success') {
      return saveOnStorage('tmh-logged-user', req.payload);
    }

    setTryLogin(true);
    setErrorMsg(req.payload);
  };

  return (
    <>
      <Header />
      <form id='form-login' onSubmit={ (e) => e.preventDefault() }>
        <input
          id='email-input'
          type='email'
          placeholder='Digite seu email'
          onChange={ (e) => setEmail(e.target.value) }
          value={ email }
          required
        />

        <input
          id='password-input'
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
      <p>Ainda não tem uma conta? <Link to='/signup'><button>Registre-se agora</button></Link></p>
      <Footer />
    </>
  );
}
