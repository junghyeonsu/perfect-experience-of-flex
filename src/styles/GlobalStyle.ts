import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    button,
    input {
        all: unset;
    }
`;

export default GlobalStyle;
