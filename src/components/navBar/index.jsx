import { Link } from 'react-router-dom';
import { ListItem, NavBarWrapper } from './navBarStyle';
import { useContext, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { checkLoggedUser } from '../../utils/localStorage';
import Store from '../../context/store';

export default function NavBar() {
  const { loggedUser, setLoggedUser } = useContext(Store);

  useEffect(() => {
    setLoggedUser(checkLoggedUser());
  }, [setLoggedUser])

  return (
    <NavBarWrapper>
      <ListItem><Link to='/' >Início</Link></ListItem>
      <ListItem><Link to='/pets' >Pets</Link></ListItem>
      <ListItem><Link to='/contact' >Contato</Link></ListItem>
      {
        loggedUser
          ? <ListItem><FaUserCircle /><Link to={ '/user-profile' } > Conta</Link></ListItem>
          : <ListItem><Link to='/login' >Login</Link></ListItem>
      }
    </NavBarWrapper>
  );
}
