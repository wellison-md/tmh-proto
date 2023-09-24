import { styled } from 'styled-components';

export const PetTitle = styled.h2`
  color: ${ ({ theme }) => theme.colors.primary };
  font-size: ${ ({ theme }) => theme.sizes.m };
  margin-bottom: ${ ({ theme }) => theme.sizes.m };
`;

export const Aside = styled.div`
  display: flex;
  justify-content: center;
  margin: ${ ({ theme }) => theme.sizes.xl } 0;

  @media(max-width: ${ ({ theme }) => theme.screens.xs }) {
    align-items: center;
    flex-direction: column;
  }
`;
