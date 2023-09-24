import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: calc((100% - 450px) / 2);
  padding: ${ ({ theme }) => theme.sizes.xm } 0;

  input {
    border-radius: ${ ({ theme }) => theme.sizes.xxs };
    border: 1px solid lightgray;
    margin-top: ${ ({ theme }) => theme.sizes.xs };
    max-width: ${ ({ theme }) => parseInt(theme.sizes.xxxm) * 10 }px;
    padding: ${ ({ theme }) => theme.sizes.xs };

    @media(max-width: ${ ({ theme }) => theme.screens.xs }) {
      max-width: ${ ({ theme }) => parseInt(theme.sizes.xm) * 10 }px;
      width: 85%;
    }
  }

  button {
    background-color: #8500d3;
    border:none;
    border-radius: ${ ({ theme }) => theme.sizes.xxs };
    color: white;
    margin-bottom: ${ ({ theme }) => theme.sizes.l };
    margin-top: ${ ({ theme }) => theme.sizes.xm };
    max-width: ${ ({ theme }) => parseInt(theme.sizes.xxxm) * 10 }px;
    padding: ${ ({ theme }) => theme.sizes.xs };
  }
  button:disabled {
    opacity: 0.3;
  }

  @media(max-width: ${ ({ theme }) => theme.screens.xs }) {
      align-items: center;
      margin-left: 0;

      button {
        width: 85%;
      }
    }
`;

export const SignSection = styled.div`
  align-items: center;
  display: flex;
  margin-left: calc((100% - 450px) / 2);
  padding: ${ ({ theme }) => theme.sizes.xm } 0;

  button {
    margin-left: 10px;
    padding: 2px ${ ({ theme }) => theme.sizes.xs };
  }

  @media(max-width: ${ ({ theme }) => theme.screens.xs }) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 0;

      p {
        margin-bottom: ${ ({ theme }) => theme.sizes.xs };
      }

    }
`;
