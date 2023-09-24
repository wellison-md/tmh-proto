import styled from 'styled-components';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: calc((100% - 40%) / 2);
  padding: ${ ({ theme}) => theme.sizes.xm } 0;

  input {
    border-radius: ${ ({ theme }) => theme.sizes.xxs };
    border: 1px solid lightgray;
    margin-top: ${ ({ theme }) => theme.sizes.xs };
    max-width: ${ ({ theme }) => parseInt(theme.sizes.xxxm) * 10 }px;
    padding: ${ ({ theme }) => theme.sizes.xs };
  }

  button {
    background-color: ${ ({ theme }) => theme.colors.primary };
    border: none;
    border-radius: ${ ({ theme }) => theme.sizes.xxs };
    color: white;
    margin-bottom: ${ ({ theme }) => theme.sizes.xxs };
    margin-top: ${ ({ theme }) => theme.sizes.xm };
    max-width: ${ ({ theme }) => parseInt(theme.sizes.xxxm) * 10 }px;
    padding: ${ ({ theme }) => theme.sizes.xs };
  }
  button:disabled {
    opacity: 0.3;
  }

  textarea {
    border: 1px solid lightgray;
    border-radius: ${ ({ theme }) => theme.sizes.xxs };
    height: 150px;
    margin-top: ${ ({ theme }) => theme.sizes.xs };
    max-height: 300px;
    max-width: ${ ({ theme }) => parseInt(theme.sizes.xxxm) * 10 }px;
    padding: ${ ({ theme }) => theme.sizes.xs };
  }

  @media(max-width: ${ ({ theme }) => theme.screens.xs }) {
    align-items: center;
    margin-left: 0;

    input, textarea, button {
      width: 85%;
    }
  }
`;
