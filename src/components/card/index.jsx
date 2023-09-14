import PropTypes from 'prop-types';
import { calculatePetcoins } from '../../utils/petCoins';
import { formatDateToView } from '../../utils/formaters';
import { CardWrapper } from './cardStyle';
import { useNavigate } from 'react-router-dom';

export default function PetCard(props) {
  const { id, image, nick, rescue_date, } = props;
  const navigate = useNavigate();

  return (
    <CardWrapper onClick={ () => navigate(`/pet-profile/${id}`) }>
      <img src={ image } alt={ nick } />
      <h3>{ nick }</h3>
      <p>Resgatado em: { formatDateToView(rescue_date) }</p>
      <p>PetCoins: { calculatePetcoins(rescue_date) }</p>
    </CardWrapper>
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
