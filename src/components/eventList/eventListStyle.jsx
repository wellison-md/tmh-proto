import styled from 'styled-components';

export const EventWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${ ({ theme }) => theme.sizes.xxm } 0;
`;

export const Image = styled.img`
  border-radius: ${ ({ theme }) => theme.sizes.m };
  max-width: 40%;
  padding: 1%;
  width: 45%;

  @media(max-width: ${ ({ theme }) => theme.screens.xs }) {
    max-width: 90%;
    width: 90%;
  }
`;
