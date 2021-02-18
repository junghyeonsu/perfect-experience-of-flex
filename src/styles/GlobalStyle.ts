import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    button,
    body {
        background-color: #e3e3e3;
    }
`;

export default GlobalStyle;
