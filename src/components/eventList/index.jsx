import PropTypes from 'prop-types';
import { EventWrapper, Image } from './eventListStyle';

export default function EventList(props) {
  const { eventList } = props;
  return (
    <EventWrapper>
      {
        eventList.length === 0
          ? 'loading...'
          : eventList.map((evt, i) => (<Image key={ i } src={ evt } alt={ `evento-${i}` } />))
      }
    </EventWrapper>
  );
}

EventList.propTypes = {
  eventList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
