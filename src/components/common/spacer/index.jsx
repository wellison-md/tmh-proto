import PropTypes from 'prop-types';
import { SpacerWrapper } from './spacerStyle';

export default function Spacer({ size }) {
  return (
    <SpacerWrapper size={ size }>
    {' '}
    </SpacerWrapper>
  );
}

Spacer.propTypes = {
  size: PropTypes.string,
};
