import { styled } from 'styled-components';

export const Topic = styled.div`
  align-items: center;
  display: flex;
  border: 1px solid lightgrey;
  border-radius: ${ ({ theme }) => theme.sizes.xxs };
  margin: ${ ({ theme }) => theme.sizes.xxs } 0 ;
  padding: ${ ({ theme }) => theme.sizes.xxs } ${ ({ theme }) => theme.sizes.m };

  & p {
    margin-left: ${ ({ theme }) => theme.sizes.xs };
  }
`;

export const CtaButton = styled.button`
  border: none;
  background-color: ${ ({ theme }) => theme.colors.primary };
  color: white;
  border-radius: ${ ({ theme }) => theme.sizes.xxs };
  display: flex;
  align-items: center;
  padding: ${ ({ theme }) => theme.sizes.xxs } ${ ({ theme }) => theme.sizes.m };
`;
