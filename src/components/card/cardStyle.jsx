import styled from 'styled-components';

export const CardWrapper = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 0 0 12px 12px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 12px;
  max-width: 250px;
  transition: .3s;
  width: 250px;

  &:hover{
    box-shadow: 0 3px 5px lightgray;
    transform: scale(1.02);
  }

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
    padding-bottom: 12px;
  }
`;
