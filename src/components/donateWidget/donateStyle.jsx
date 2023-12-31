import styled from 'styled-components';

export const DonateLabel = styled.h2`
  color: #fff;
  padding: ${ ({ theme }) => theme.sizes.xm } 0;
  text-align: center;
`;

export const ComandBtn = styled.button`
  background-color: ${ ({ theme }) => theme.colors.primary };
  border: none;
  border-radius: ${ ({ theme }) => theme.sizes.xxs };
  color: white;
  font-size: ${ ({ theme }) => theme.sizes.m };
  margin: 0 ${ ({ theme }) => theme.sizes.m };
  padding: ${ ({ theme }) => theme.sizes.xxs } ${ ({ theme }) => theme.sizes.xm };
  transition: 0.2s;

  &:hover {
    background-color: #d998ff;
  }

  &:disabled {
    background-color: grey;
    opacity: 0.5;
  }

  @media(max-width: ${ ({ theme }) => theme.screens.xs }) {
    padding: ${ ({ theme }) => theme.sizes.xxs }; ${ ({ theme }) => theme.sizes.s };
  }
`;

export const Balance = styled.h1`
  color: white;
`;

export const Comand = styled.div`
  display: flex;

  @media(max-width: ${ ({ theme }) => theme.screens.xs }) {
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  background-color: #000;
  display: flex;
  flex-direction: column;
`;

export const DonateBtn = styled.button`
  border-radius: ${ ({ theme }) => theme.sizes.xxs };
  font-size: ${ ({ theme }) => theme.sizes.s };
  margin: ${ ({ theme }) => theme.sizes.xm } 0;
  padding: ${ ({ theme }) => theme.sizes.xs };
  width: ${ ({ theme }) => parseInt(theme.sizes.xxm) * 10 }px;

  &:disabled {
    color: white;
    opacity: 0.5;
  }

  @media(max-width: ${ ({ theme }) => theme.screens.xs }) {
    max-width: ${ ({ theme }) => parseInt(theme.sizes.m) * 10 }px;
  }
`;

export const DonateContainer = styled.div`
  background-color: #000;
`;
