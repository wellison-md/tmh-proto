import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${ ({ theme }) => theme.colors.primary };
  display: flex;
  justify-content: center;
  padding: ${ ({ theme }) => theme.sizes.xs };
`;

export const IconTmh = styled.img`
  height: ${ ({ theme }) => theme.sizes.l };
  max-height: ${ ({ theme }) => theme.sizes.l };
  padding-right: ${ ({ theme }) => theme.sizes.xs };

  @media(max-width: ${ ({ theme }) => theme.screens.xs }) {
    display: none;
  }
`;
