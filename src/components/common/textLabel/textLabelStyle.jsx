import styled from 'styled-components';

export const Text = styled.p`
  padding: ${ (props) => props.padding ? props.padding : '12px' };
  font-size: ${ (props) => props.fsize ? props.fsize : '18px' };
`;
