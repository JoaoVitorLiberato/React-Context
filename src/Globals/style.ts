import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0 auto;
        box-sizing: border-box;
    }

    html{
        font: 16px 'Roboto', sans-serif;
    }

    body{
        background-color: lightseagreen;
    }
`;