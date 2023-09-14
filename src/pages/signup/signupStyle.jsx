import styled from "styled-components";

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: calc((100% - 450px) / 2);
  padding: 36px 0;

  input {
    border-radius: 8px;
    border: 1px solid lightgray;
    margin-top: 12px;
    max-width: 450px;
    padding: 12px;
  }

  button {
    background-color: #8500d3;
    border:none;
    border-radius: 8px;
    color: white;
    margin-bottom: 48px;
    margin-top: 36px;
    max-width: 450px;
    padding: 12px;
  }
  button:disabled {
    opacity: 0.3;
  }
`;
