import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html, body, main, section, form, input, div, button, a, span, p, h1, h2, h3 {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
    }

    :root {
        --white: #FFF;
        --gray: #AAA;
        --black: #000;
        --yellow: #FF0;
    }

    html, body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1rem;
    }

    body, p, input, button {
        font-size: 1rem;
    }

    h1, h2, h3, p {
        margin-bottom: 1rem;
    }

    button {
        background-color: var(--black);
        border: none;
        border-radius: 1rem;
        color: var(--white);
        cursor: pointer;
        margin-bottom: 0.5rem;
        padding: 0.5rem;
        &:hover {
            color: var(--yellow);
            text-decoration: underline;
        }
    }

    a {
        color: var(--white);
        text-decoration: none;
        &:hover {
            color: var(--yellow);
            text-decoration: underline;
        }
    }
`;
