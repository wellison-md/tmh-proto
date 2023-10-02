import PropTypes from 'prop-types';
import Flex from '../flex';
import { Text } from './textLabelStyle';

export default function TextLabel({ txt, fsize }) {
  return (
    <Flex>
      <Text fsize={ fsize }>{ txt }</Text>
    </Flex>
  );
}

TextLabel.propTypes = {
  txt: PropTypes.string,
  fsize: PropTypes.string,
};

TextLabel.defaultProps = {
  txt: 'lorem ipsum',
};
