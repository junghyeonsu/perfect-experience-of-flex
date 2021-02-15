import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    button,
    body {
        background-color: #75d5d5;
    }
`;

export default GlobalStyle;
