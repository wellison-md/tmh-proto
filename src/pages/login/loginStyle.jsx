import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginForm = styled.form`
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

export const SignSection = styled.div`
  align-items: center;
  display: flex;
  margin-left: calc((100% - 450px) / 2);
  padding: 36px 0;

  button {
    margin-left: 10px;
    padding: 2px 12px;
  }
`;
