import styled from 'styled-components';

export const SpacerWrapper = styled.span`
  padding: ${ (props) => props.size ? props.size : '12px' };
  display: block;
`;
