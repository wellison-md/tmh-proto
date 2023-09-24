
import PropTypes from 'prop-types';
import { formatAge, formatCategory, formatDateToView, formatGender } from '../../utils/formaters';
import { CtaButton, Topic } from './dataPetStyle';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { BiCategory, BiTime } from 'react-icons/bi';
import { BsGenderAmbiguous } from 'react-icons/bs';
import { PiHandHeartBold } from 'react-icons/pi';
import { calculatePetcoins } from '../../utils/petCoins';

export default function DataPet(props) {
  const { data } = props;

  return (
    <>
      <ul>
        <Topic>
          <FaRegCalendarAlt size='24px' />
          <p>Resgatado em: {formatDateToView(data.rescue_date)}</p>
        </Topic>

        <Topic>
          <BiCategory size='24px' />
          <p></p>Categoria: {formatCategory(data.category)}
        </Topic>

        <Topic>
          <BiTime size='24px' />
          <p>Idade: {formatAge(data.age)}</p>
        </Topic>

        <Topic>
          <BsGenderAmbiguous size='24px' />
          <p>Gênero: {formatGender(data.gender)}</p>
        </Topic>
      </ul>

      <h3>Vacinas e medicações</h3>
      <section>
        {
          data.vaccins?.length === 0
            ? 'Sem informações adicionais'
            : data.vaccins?.map((vac, i) => (<Topic key={i}>{vac}</Topic>))
        }
      </section>

        <CtaButton>
          <PiHandHeartBold size='24px' />
          <p>Adotar por { calculatePetcoins(data?.rescue_date)} petcoins</p>
        </CtaButton>
    </>
  );
}

DataPet.propTypes = {
  data: PropTypes.shape({
    rescue_date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    vaccins: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};