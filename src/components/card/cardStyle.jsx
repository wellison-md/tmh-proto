import styled from "styled-components";

export const CardWrapper = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 5px #888;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 500px;
  margin: 12px;
  max-width: 250px;
  padding: 8px;
  transition: .3s;
  width: 250px;

  & img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  & h3 {
    color: #8500d3;
    font-size: 24px;
    padding-top: 8px;
  }

  & p {
    font-size: 13px;
  }
`;
