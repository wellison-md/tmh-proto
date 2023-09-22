import styled from "styled-components";

export const DonateLabel = styled.h2`
  color: #fff;
  padding: 36px 0;
`;

export const ComandBtn = styled.button`
  background-color: #8500d3;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 20px;
  margin: 0 24px;
  padding: 8px 36px;
  transition: 0.2s;

  &:hover {
    background-color: #d998ff;
  }

  &:disabled {
    background-color: grey;
    opacity: 0.5;
  }
`;

export const Balance = styled.h1`
  color: white;
`;

export const Comand = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  background-color: #000;
  padding-left: calc((100% - 300px) / 2);
  `;

export const DonateBtn = styled.button`
  border-radius: 8px;
  margin: 36px 0;
  font-size: 18px;
  padding: 12px;
  width: 360px;

  &:disabled {
    color: white;
  }
`;

export const DonateContainer = styled.div`
  background-color: #000;
`;
