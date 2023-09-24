import PropTypes from 'prop-types';
import { EventWrapper, Image } from './eventListStyle';
import Spinner from '../spinner';

export default function EventList(props) {
  const { eventList } = props;
  return (
    <EventWrapper>
      {
        eventList.length === 0
          ? <Spinner msg='Carregando...' />
          : eventList.map((evt, i) => (<Image key={ i } src={ evt } alt={ `evento-${i}` } />))
      }
    </EventWrapper>
  );
}

EventList.propTypes = {
  eventList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
