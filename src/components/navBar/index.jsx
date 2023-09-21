import { Link } from "react-router-dom";
import { ListItem, NavBarWrapper } from "./navBarStyle";
import { useContext } from "react";
import { FaUserCircle } from 'react-icons/fa';
import { getFromStorage } from "../../utils/localStorage";
import Store from "../../context/store";

export default function NavBar() {
  const { loggedUser } = useContext(Store);
  const { usrname } = getFromStorage('tmh-logged-user');

  return (
    <NavBarWrapper>
      <ListItem><Link to='/' >Início</Link></ListItem>
      <ListItem><Link to='/pets' >Pets</Link></ListItem>
      <ListItem><Link to='/contact' >Contato</Link></ListItem>
      {
        loggedUser
          ? <ListItem><FaUserCircle /><Link to={ `/user-profile` } >{ usrname || 'conta' }</Link></ListItem>
          : <ListItem><Link to='/login' >Login</Link></ListItem>
      }
    </NavBarWrapper>
  );
}
