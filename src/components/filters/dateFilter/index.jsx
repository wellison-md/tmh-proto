import { useState } from 'react';
import { FilterSection } from './dateFilterStyle';
import { VscError } from 'react-icons/vsc';

export default function DateFilter() {
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');


  const handleInitialFilter = (e) => {
    setInitialDate(e.target.value);
  };

  const handleFinalFilter = (e) => {
    setFinalDate(e.target.value);
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

        <button onClick={ () => setInitialDate('') } disabled={ initialDate === '' }>
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

        <button onClick={ () => setFinalDate('') } disabled={ finalDate === '' }>
          <VscError />
        </button>
      </span>
    </FilterSection>
  );
}
