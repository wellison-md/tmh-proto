import PropTypes from 'prop-types';

export default function EventList(props) {
  const { eventList } = props;
  return (
    <>
      {
        eventList.length === 0
          ? 'loading...'
          : eventList.map((evt, i) => (<img key={ i } src={ evt } alt={ `evento-${i}` } />))
      }
    </>
  );
}

EventList.propTypes = {
  eventList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
