import { styled } from 'styled-components';

export const PetTitle = styled.h2`
  color: ${ ({ theme }) => theme.colors.primary };
  font-size: ${ ({ theme }) => theme.sizes.m };
  margin: ${ ({ theme }) => theme.sizes.m } 0;
`;