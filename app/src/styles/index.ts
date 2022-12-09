import { createGlobalStyle } from 'styled-components';
import { styleConfig } from '../utils/constants';

const { dark, light } = styleConfig.theme;

export default createGlobalStyle<{ theme: string }>`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${(props) => (props.theme === 'light' ? light : dark)};
  }

  body html #root {
    height: 100%;
  }
`;
