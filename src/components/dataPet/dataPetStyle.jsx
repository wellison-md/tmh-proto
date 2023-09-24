import { styled } from 'styled-components';

export const Topic = styled.div`
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: ${ ({ theme }) => theme.sizes.xxs };
  display: flex;
  margin: ${ ({ theme }) => theme.sizes.xxs } 0 ;
  padding: ${ ({ theme }) => theme.sizes.xxs } ${ ({ theme }) => theme.sizes.m };

  & p {
    margin-left: ${ ({ theme }) => theme.sizes.xs };
  }
`;

export const CtaButton = styled.button`
  align-items: center;
  background-color: ${ ({ theme }) => theme.colors.primary };
  border: none;
  border-radius: ${ ({ theme }) => theme.sizes.xxs };
  color: white;
  display: flex;
  font-size: ${ ({ theme }) => theme.sizes.s };
  margin: ${ ({ theme }) => theme.sizes.m } 0;
  padding: ${ ({ theme }) => theme.sizes.xxs } ${ ({ theme }) => theme.sizes.m };
  transition: 0.3s;

  &:hover {
    background-color: ${ ({ theme }) => theme.colors.comp2 };
  }
`;
