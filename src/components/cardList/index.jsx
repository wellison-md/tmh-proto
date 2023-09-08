import PropTypes from 'prop-types';
import PetCard from '../card';

export default function CardList(props) {
  const { petList } = props;
  return (
    <>
      {
        petList.length === 0
          ? 'loading...'
          : petList.map((item) => <PetCard key={ item.id } { ...item } />)
      }
    </>
  );
}

CardList.propTypes = {
  petList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    nick: PropTypes.string,
    image: PropTypes.string,
    rescue_date: PropTypes.string,
  })).isRequired,
}
