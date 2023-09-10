import { useState } from "react";
import NavBar from "../../components/navBar";

export default function Contact() {
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const validInputs = contactName.length >= 3
    && email.length >= 6
    && subject.length >= 30;

  return (
    <>
      <h1>Contato</h1>
      <NavBar />
      <form onSubmit={ (e) => e.preventDefault() }>
        <input
          id='contact-name'
          type='text'
          placeholder='Seu nome'
          onChange={ (e) => setContactName(e.target.value) }
          value={ contactName }
          required
        />

        <input
          id='contact-email'
          type='email'
          placeholder='Seu email para contato'
          onChange={ (e) => setEmail(e.target.value) }
          value={ email }
          required
        />

        <textarea
          id='contact-subject'
          placeholder='Sobre o que você quer conversar?'
          onChange={ (e) => setSubject(e.target.value) }
          maxLength='500'
          value={ subject }
          required
        >
        </textarea>

        <button
          disabled={ !validInputs }
        >Enviar email</button>
      </form>
    </>
  );
}
