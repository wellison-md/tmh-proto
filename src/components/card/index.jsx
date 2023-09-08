import PropTypes from 'prop-types';

export default function PetCard(props) {
  const { image, nick, rescue_date, } = props;
  return (
    <>
      <img src={ image } alt={ nick } />
      <h3>{ nick }</h3>
      <span>
        <p>Resgatado em: { rescue_date }</p>
        <p>PetCoins: { 10 }</p>
      </span>
    </>
  );
}

PetCard.propTypes = {
  image: PropTypes.string,
  nick: PropTypes.string,
  rescue_date: PropTypes.string,
};

PetCard.defaultValues = {
  image: '',
  nick: 'nickname-pet',
  rescue_date: 'YYYY-MM-DD',
};
