import styled, { createGlobalStyle } from 'styled-components'
// @ts-ignore
import BGImage from './images/dark_continent.jpg'


export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-itmes: center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate inInline, sans-serif;
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        --webkit-background-clip: text;
        --webkit-text-fill-color: transparent;
        --moz-background-clip: text;
        --moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #00085a3);
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }
`