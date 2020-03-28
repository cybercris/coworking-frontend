import { createGlobalStyle } from 'styled-components';
import { colors } from './themes';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    text-decoration: none;
    box-sizing: border-box;
}

html, body, #root {
    height: 100%;
    font-family: 'Roboto', sans-serif;
}

body{
    background: ${colors.primary};
    -webkit-font-smoothing: antialiased !important;
}

body, input {
    color: ${colors.light};
    font-size: 14px;
}

button{
    color: ${colors.secondary};
    font-size: 14px;
    cursor: pointer;
}

`;
