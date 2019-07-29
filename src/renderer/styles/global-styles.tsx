import { createGlobalStyle } from 'styled-components';
import {bg0, darkDarkBlack, orange, text} from './colors';
// import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
#App {
  font-family: Raleway, sans-serif !important;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  background: ${bg0};
}
body, html {
  font-family: Raleway, sans-serif !important;
  background-color: ${darkDarkBlack};
  display: flex;
  flex-grow: 1;
  height: 100%;
  width: 100%;
}
a {
  cursor: pointer;
  color: ${text.secondary};
  text-decoration: none;
  transition-duration: 0.2s;
}
a:hover {
  color: ${orange};
  transition-duration: 0.2s;
}
`;
