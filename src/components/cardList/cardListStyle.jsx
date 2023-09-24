import styled from 'styled-components';

export const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  margin-left: calc((100% - 80%)/2);

  @media(max-width: ${ ({ theme }) => theme.screens.xs }) {
    margin-left: 0;
  }
`;

export const CardListLabel = styled.h3`
  padding-top: ${ ({ theme}) => theme.sizes.m };
  padding-bottom: ${ ({ theme}) => theme.sizes.s };
`;
