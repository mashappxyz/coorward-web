import Head from 'next/head';
import styled, { createGlobalStyle, ThemeProvider, withTheme } from 'styled-components';
import '@blueprintjs/core/lib/css/blueprint.css';

const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: 'Roboto', sans-serif;
    }

    a, a:visited {
        color: ${({ theme }) => theme.text};
    }

    * {
        box-sizing: border-box;
    }

    @media (prefers-color-scheme: dark) {
        .body   {
            background:  #333;
            color: white;
        }
    }
`;

const MainBody = withTheme(styled.div`
    margin: 10px auto;
    max-width: 760px;
    padding: 10px 30px;
    // border: 1px solid ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
`);

const lightTheme = {
    class: '',
    body: '#FFFFFF',
    text: '#333333',
};

const darkTheme = {
    class: 'bp3-dark',
    body: '#30404d',
    text: '#EFEFEF',
};

// const theme = typeof window != 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)') ? darkTheme : lightTheme;
const theme = darkTheme;

const App = ({ Component, pageProps }) => (
    <ThemeProvider theme={theme}>
        <Head>
            <title>PokeX</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto:400,600,700&display=swap" rel="stylesheet"/>
        </Head>
        <MainBody className={theme.class}>
            <GlobalStyle/>
            <Component {...pageProps} />
        </MainBody>
    </ThemeProvider>
);

export default App;
