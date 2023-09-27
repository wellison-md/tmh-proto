import { useContext, useState } from 'react';
import Store from '../../../context/store';
import { FilterSection } from './dateFilterStyle';
import { VscError } from 'react-icons/vsc';

export default function DateFilter() {
  const { date, setDate } = useContext(Store);
  const [isActive, setIsActive] = useState(false);

  const handleFilter = (e) => {
    setIsActive(true);
    setDate(e.target.value);
  };

  const resetFilter = () => {
    setIsActive(false);
    setDate('');
  };

  return (
    <FilterSection>
      <h2>Data </h2>
      <p>filtre pela data de resgate</p>
      <span>
        <input
          type='date'
          value={ date }
          onChange={ (e) => handleFilter(e) }
        />

        <button onClick={ () => resetFilter() } disabled={ !isActive }>
          <VscError />
        </button>
      </span>
    </FilterSection>
  );
}
