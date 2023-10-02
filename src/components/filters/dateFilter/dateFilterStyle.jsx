import { styled } from 'styled-components';

export const FilterSection = styled.div`
    border-radius: ${ ({ theme }) => theme.sizes.xxs };
    display: flex;
    flex-direction: column;
    max-width: ${ ({ theme }) => parseInt(theme.sizes.xxxm) * 10}px;

    input {
      border: 1px solid lightgrey;
      border-radius: 8px 0 0 8px;
      padding: ${ ({ theme }) => theme.sizes.xxs };
      width: 150px;
    }

    p {
      margin: ${ ({ theme }) => theme.sizes.xs } 0 0 0;
    }

    button {
      background-color: ${ ({ theme }) => theme.colors.primary };
      border: 1px solid ${ ({ theme }) => theme.colors.primary };
      border-radius: 0 8px 8px 0;
      color: white;
      padding: ${ ({ theme }) => theme.sizes.xxs };
      transition: 0.3s;
    }
    button:disabled {
      opacity: 0.5;
    }
`;
