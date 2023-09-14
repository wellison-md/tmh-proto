import PropTypes from 'prop-types';
import PetCard from '../card';
import { CardListLabel, CardListWrapper, Wrapper } from './cardListStyle';
import { BiSolidZap } from 'react-icons/bi';

export default function CardList(props) {
  const { petList } = props;

  return (
    <Wrapper>
      <CardListLabel><BiSolidZap /> Resgatados recentemente</CardListLabel>
      <CardListWrapper>
        {
          petList.length === 0
            ? 'loading...'
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
