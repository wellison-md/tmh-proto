import { useState } from 'react';
import PropTypes from 'prop-types';
import Store from './store';

export default function StoreProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState(false);

  const [pets, setPets] = useState([]);
  const [date, setDate] = useState('');
  const [category, setCategory] = useState([]);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');

  const INITIAL_STATE = {
    loggedUser,
    setLoggedUser,
    pets,
    setPets,
    date,
    setDate,
    category,
    setCategory,
    age,
    setAge,
    gender,
    setGender,
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
