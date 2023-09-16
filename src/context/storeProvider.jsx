import { useState } from "react";
import PropTypes from 'prop-types';
import Store from "./store";

export default function StoreProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState(false);

  const INITIAL_STATE = {
    loggedUser,
    setLoggedUser,
  };


  return (
    <Store.Provider value={ INITIAL_STATE } >
      { children }
    </Store.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
