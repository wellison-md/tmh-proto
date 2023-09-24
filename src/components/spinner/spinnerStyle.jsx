import styled, { keyframes } from 'styled-components';

const rotateIcon = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

export const Image = styled.img`
  animation: ${rotateIcon} 1s infinite linear;
  max-width: 100px;
  padding: ${ ({ theme }) => theme.sizes.xxxl } 0;
  width: 40px;
`;

export const SpinnerWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const Label = styled.p`
  padding-left: ${ ({ theme }) => theme.sizes.s };
`;
