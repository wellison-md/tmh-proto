import { useCallback, useContext, useState } from 'react';
import { FilterSection } from './dateFilterStyle';
import { VscError } from 'react-icons/vsc';
import CardList from '../../cardList';
import { isInDateInterval } from '../../../utils/dates';
import Store from '../../../context/store';

export default function DateFilter() {
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');
  const { filterPets, setFilterPets, defaultPets } = useContext(Store);

  const applyFilter = useCallback(() => {
    const filtered = filterPets.filter((item) => isInDateInterval(initialDate, finalDate, item.rescue_date));
    console.log(filtered);
    setFilterPets(filtered);
  }, [filterPets, finalDate, initialDate, setFilterPets])

  const handleInitialFilter = (e) => {
    setInitialDate(e.target.value);
  };

  const handleFinalFilter = (e) => {
    setFinalDate(e.target.value);
  };

  const resetInitialFilter = () => {
    setInitialDate('');
    setFilterPets(defaultPets);
  };

  const resetFinalFilter = () => {
    setFinalDate('');
    setFilterPets(defaultPets);
  };

  return (
    <FilterSection>
      <h2>Data </h2>
      <span>
        <p>Data inicial</p>
        <input
          type='date'
          value={ initialDate }
          onChange={ (e) => handleInitialFilter(e) }
        />

        <button onClick={ () => resetInitialFilter() } disabled={ initialDate === '' }>
          <VscError />
        </button>
      </span>

      <span>
        <p>Data final</p>
        <input
          type='date'
          value={ finalDate }
          onChange={ (e) => handleFinalFilter(e) }
        />

        <button onClick={ () => resetFinalFilter() } disabled={ finalDate === '' }>
          <VscError />
        </button>
      </span>
      <button onClick={ () => setFilterPets(defaultPets) }>Reset</button>
      <button onClick={ () => applyFilter() }>Buscar</button>
      {
        filterPets.length === 0
          ? <p>Nenhum resultados encontrado :/</p>
          : (<div>
              <p>{ filterPets.length } resultado(s) encontrados</p>
              <CardList petList={ filterPets } />
          </div>)
      }
    </FilterSection>
  );
}
