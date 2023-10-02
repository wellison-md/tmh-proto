import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Store from './store';
import { pets } from '../utils/fkdb/fkPets';

export default function StoreProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState(false);

  const [defaultPets, setDefaultPets] = useState(pets);
  const [filterPets, setFilterPets] = useState(pets);

  const INITIAL_STATE = useMemo(() => ({
    loggedUser,
    setLoggedUser,
    defaultPets,
    setDefaultPets,
    filterPets,
    setFilterPets,
  }), [defaultPets, filterPets, loggedUser]);


  return (
    <Store.Provider value={ INITIAL_STATE } >
      { children }
    </Store.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
