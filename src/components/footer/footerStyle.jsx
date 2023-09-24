import styled from 'styled-components';

export const Bg = styled.div`
  align-items: center;
  background-color: #111;
  color: #999;
  display: flex;
  flex-direction: column;
  padding: ${ ({ theme }) => theme.sizes.xm };
`;

export const FooterLabel = styled.h4`
  color: white;
  font-size: ${ ({ theme }) => theme.sizes.m };
  padding-bottom: ${ ({ theme }) => theme.sizes.xs };
  padding-top: ${ ({ theme }) => theme.sizes.xs };
  text-align: center;

  @media(max-width: ${ ({ theme }) => theme.screens.xs }) {
    font-size: ${ ({ theme }) => theme.sizes.s };
  }
`;

export const FooterIcon = styled.img`
  height: ${ ({ theme }) => theme.sizes.xm };
  max-height: ${ ({ theme }) => theme.sizes.xm };
  padding-right: ${ ({ theme }) => theme.sizes.xs };
`;

export const FooterHeadline = styled.div`
  align-items: center;
  display: flex;
`;
