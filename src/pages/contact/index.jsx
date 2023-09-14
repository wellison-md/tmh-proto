import { useState } from "react";
import Header from "../../components/header";
import { sendWappMsg } from "../../utils/contact";
import Footer from "../../components/footer";

export default function Contact() {
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const validInputs = contactName.length >= 3
    && email.length >= 6
    && subject.length >= 30;

  return (
    <>
      <Header />
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
          placeholder='Sobre o que você quer conversar? (mensagem mínima de 30 caracteres)'
          onChange={ (e) => setSubject(e.target.value) }
          maxLength='500'
          value={ subject }
          required
        >
        </textarea>

        <button
          disabled={ !validInputs }
          onClick={ () => sendWappMsg(subject, contactName, email) }
        >Enviar email</button>
      </form>
      <Footer />
    </>
  );
}
