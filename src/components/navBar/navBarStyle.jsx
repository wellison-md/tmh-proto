import { styled } from 'styled-components';

export const NavBarWrapper = styled.ul`
  background-color: ${ ({ theme }) => theme.colors.primary };
  color: white;
  display: flex;
  height: ${ ({ theme }) => theme.sizes.m };
  justify-content: center;
  list-style: none;
  width: 100%;
`;

export const ListItem = styled.li`
  align-self: center;
  cursor: pointer;
  margin: 0 16px;
  transition: 0.3s linear;
`;
