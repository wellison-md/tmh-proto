import styled from 'styled-components';

export const CardWrapper = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 0 0 ${ ({ theme }) => theme.sizes.xs } ${ ({ theme }) => theme.sizes.xs };
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: ${ ({ theme }) => theme.sizes.xs };
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
    font-size: ${ ({ theme }) => theme.sizes.m };
    padding-top: ${ ({ theme }) => theme.sizes.xxs };
  }

  & p {
    font-size: ${ ({ theme }) => theme.sizes.xs };
    padding-bottom: ${ ({ theme }) => theme.sizes.xs };
  }

  @media(max-width: ${ ({ theme }) => theme.screens.xs }) {
    max-width: 45%;
    margin: ${ ({ theme }) => theme.sizes.xxs };
  }
`;
