import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    height: 100%;
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.7rem;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-style: inherit;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;

const theme = {
  purple: '#7047eb',
  pink: '#DD47EB',
  green: '#C2EB47'
};

export { GlobalStyles, theme };