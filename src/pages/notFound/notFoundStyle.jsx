import { styled } from 'styled-components';

export const Error404 = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: ${ ({ theme }) => theme.sizes.xm };
    height: 100%;
    justify-content: center;
    margin-bottom: ${ ({ theme }) => theme.sizes.xxxl };
    margin-top: ${ ({ theme }) => parseInt(theme.sizes.xxxl) * 2 }px;

  p {
    font-size: 18px;
    max-width: 300px;
    text-align: center;
  }

  svg {
    color: ${ ({ theme }) => theme.colors.comp1 };
  }
`;
