import styled from "styled-components";

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: calc((100% - 450px) / 2);
  padding: ${ ({ theme }) => theme.sizes.m } 0;

  input {
    border: 1px solid lightgray;
    border-radius: ${ ({ theme }) => theme.sizes.xs };
    margin-top: ${ ({ theme }) => theme.sizes.s };
    max-width: ${ ({ theme }) => parseInt(theme.sizes.m) * 10}px;
    padding: ${ ({ theme }) => theme.sizes.s };
  }

  button {
    background-color: ${ ({ theme }) => theme.colors.primary };
    border: none;
    border-radius: ${ ({ theme }) => theme.sizes.xs };
    color: white;
    margin-bottom: ${ ({ theme }) => theme.sizes.l };
    margin-top: ${ ({ theme }) => theme.sizes.l };
    max-width: ${ ({ theme }) => parseInt(theme.sizes.m) * 10}px;
    padding: ${ ({ theme }) => theme.sizes.s };
  }
  button:disabled {
    opacity: 0.3;
  }
`;

export const LabelAlert = styled.p`
  background-color: rgba(255, 0, 0, 0.5);
  padding: ${ ({ theme }) => theme.sizes.xs };
  color: white;
  max-width: ${ ({ theme }) => parseInt(theme.sizes.m) * 10}px;
`;
