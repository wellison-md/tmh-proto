import spinner from '../../assets/dvs/spinner_loading.png';
import { Image, Label, SpinnerWrapper } from './spinnerStyle';
import PropTypes from 'prop-types';

export default function Spinner(props) {
  const { msg } = props;
  return (
    <SpinnerWrapper>
      <Image src={ spinner } alt='spinner' />
      <Label>{ msg }</Label>
    </SpinnerWrapper>
  );
}

Spinner.propTypes = {
  msg: PropTypes.string.isRequired,
};

