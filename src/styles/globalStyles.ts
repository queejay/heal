import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6, p, a, button {
        margin: 0;
        padding: 0;
        line-height: 1;
    }

    a {
        text-decoration: none;
    }

    button {
        all: unset;
    }
`

