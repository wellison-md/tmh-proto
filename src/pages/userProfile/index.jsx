import { useContext, useEffect, useState } from 'react';
import { getFromStorage } from '../../utils/localStorage';
import { makeLogout } from '../../utils/login';
import { useNavigate } from 'react-router-dom';
import { LogoutBtn, UserAvatar, UserCoins, UserLabel, Wrapper } from './userProfileStyle';
import { RiCoinsLine } from 'react-icons/ri'
import Footer from '../../components/footer';
import Header from '../../components/header';
import Store from '../../context/store';
import Swal from 'sweetalert2';

export default function UserProfile() {
  const { setLoggedUser } = useContext(Store);
  const [currentUser, setCurrentUser] = useState({});
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
      <Wrapper>
        <UserAvatar src={ currentUser.avatar } alt='imagem do usuário' />
        <UserLabel>Olá, { currentUser.usrname }</UserLabel>
        <UserCoins><RiCoinsLine /> petcoins: { currentUser.petCoins }</UserCoins>
        <h3>Pet favoritos</h3>
        {
          currentUser?.pets?.map((pet, i) => <p key={ i }>{ pet }</p>)
        }
        <LogoutBtn onClick={ () => logout() } >Sair</LogoutBtn>
      </Wrapper>
      <Footer />
    </>
  );
}
