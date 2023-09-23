import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f9f9f9;
}

`;