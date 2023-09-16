import { useContext, useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { getFromStorage } from "../../utils/localStorage";
import { makeLogout } from "../../utils/login";
import Store from "../../context/store";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const [currentUser, setCurrentUser] = useState({});
  const { setLoggedUser } = useContext(Store);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentUser(getFromStorage('tmh-logged-user'))
  }, []);

  const logout = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Até mais ${currentUser.usrname}`,
      showConfirmButton: false,
      timer: 1200
    });
    navigate('/');
    setLoggedUser(false);
    makeLogout();
  }

  return (
    <>
      <Header />
      <img src={ currentUser.avatar } alt='imagem do usuário' />
      <h2>Olá, { currentUser.usrname }</h2>
      <p>Petcoins { currentUser.petCoins }</p>
      <button onClick={ () => logout() } >Sair</button>
      <Footer />
    </>
  );
}
