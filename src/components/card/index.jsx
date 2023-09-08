import PropTypes from 'prop-types';
import { calculatePetcoins } from '../../utils/petCoins';
import { formatDateToView } from '../../utils/formaters';
import { Link } from 'react-router-dom';

export default function PetCard(props) {
  const { id, image, nick, rescue_date, } = props;
  return (
    <>
      <Link to={ `/pet-profile/${id}` } >
        <img src={ image } alt={ nick } />
        <h3>{ nick }</h3>
        <span>
          <p>Resgatado em: { formatDateToView(rescue_date) }</p>
          <p>PetCoins: { calculatePetcoins(rescue_date) }</p>
        </span>
      </Link>
    </>
  );
}

PetCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  nick: PropTypes.string,
  rescue_date: PropTypes.string,
};

PetCard.defaultValues = {
  image: '',
  nick: 'nickname-pet',
  rescue_date: 'YYYY-MM-DD',
};
