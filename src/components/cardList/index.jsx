import PropTypes from 'prop-types';
import PetCard from '../card';
import { CardListWrapper, Wrapper } from './cardListStyle';
import Spinner from '../spinner';

export default function CardList(props) {
  const { petList } = props;

  return (
    <Wrapper>
      <CardListWrapper>
        {
          petList.length === 0
            ? <Spinner msg='Carregando...' />
            : petList.map((item) => <PetCard key={ item.id } { ...item } />)
        }
      </CardListWrapper>
    </Wrapper>
  );
}

CardList.propTypes = {
  petList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    nick: PropTypes.string,
    image: PropTypes.string,
    rescue_date: PropTypes.string,
  })).isRequired,
}
