import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeLogin } from "../../utils/login";
import { saveOnStorage } from "../../utils/localStorage";
import { LoginForm, SignSection, Wrapper } from "./loginStyle";
import Swal from "sweetalert2";
import Header from "../../components/header";
import Footer from '../../components/footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const [tryLogin, setTryLogin] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const isActive = email.length > 6 && pswd.length >= 6

  const checkLogin = async (email, pswd) => {
    const req = await makeLogin(email, pswd);

    if (req.status === 'success') {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Bem vindo ${req.payload.usrname}`,
        showConfirmButton: false,
        timer: 1200
      })
      saveOnStorage('tmh-logged-user', req.payload);
      return navigate('/');
    }

    setTryLogin(true);
    setErrorMsg(req.payload);
  };

  return (
    <Wrapper>
      <Header />
      <LoginForm id='form-login' onSubmit={ (e) => e.preventDefault() }>
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
      </LoginForm>

      <SignSection>
        <hr />
        <p>Ainda não tem uma conta?</p>
        <button onClick={ () => navigate('/signup') }>Registre agora</button>
      </SignSection>

      <Footer />
    </Wrapper>
  );
}
