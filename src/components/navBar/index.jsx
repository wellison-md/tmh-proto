import { Link } from "react-router-dom";
import { ListItem, NavBarWrapper } from "./navBarStyle";
import { useContext } from "react";
import Store from "../../context/store";
import { FaUserCircle } from 'react-icons/fa';

export default function NavBar() {
  const { loggedUser } = useContext(Store);

  return (
    <NavBarWrapper>
      <ListItem><Link to='/' >Início</Link></ListItem>
      <ListItem><Link to='/pets' >Pets</Link></ListItem>
      <ListItem><Link to='/contact' >Contato</Link></ListItem>
      {
        loggedUser
          ? <ListItem><FaUserCircle /><Link to={ `/user-profile` } > Usuário</Link></ListItem>
          : <ListItem><Link to='/login' >Login</Link></ListItem>
      }
    </NavBarWrapper>
  );
}
