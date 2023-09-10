import { Link } from "react-router-dom";
import { ListItem, NavBarWrapper } from "./navBarStyle";

export default function NavBar() {
  return (
    <NavBarWrapper>
      <ListItem><Link to='/' >Início</Link></ListItem>
      <ListItem><Link to='/pets' >Pets</Link></ListItem>
      <ListItem><Link to='/contact' >Contato</Link></ListItem>
      <ListItem><Link to='/login' >Login</Link></ListItem>
    </NavBarWrapper>
  );
}
