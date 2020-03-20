import { createGlobalStyle } from 'styled-components';
import { colors } from './themes';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

import Light from '~/assets/fonts/bmw-helvetica-45-light.otf';
import Roman from '~/assets/fonts/bmw-helvetica-55-roman.otf';
import Bold from '~/assets/fonts/bmw-helvetica-75-bold.otf';
import Heavy from '~/assets/fonts/bmw-helvetica-85-heavy.otf';
import NeueRoman from '~/assets/fonts/helvetica-neue-55-roman.ttf';
import NeueBold from '~/assets/fonts/helvetica-neue-75-bold.otf';

export default createGlobalStyle`

@font-face {
  font-family: 'Light';
  src: url(${Light});
}
@font-face {
  font-family: 'Roman';
  src: url(${Roman});
}
@font-face {
  font-family: 'Bold';
  src: url(${Bold});
}
@font-face {
  font-family: 'Heavy';
  src: url(${Heavy});
}
@font-face {
  font-family: 'Neue Roman';
  src: url(${NeueRoman});
}
@font-face {
  font-family: 'Neue Bold';
  src: url(${NeueBold});
}

* {
    margin: 0;
    padding: 0;
    outline: 0;
    text-decoration: none;
    box-sizing: border-box;
}

html, body, #root {
    height: 100%;
    /* font-family: BMW Helvetica; */
}

body{
    background: ${colors.primary};
    /*-webkit-font-smoothing: antialiased !important;*/
}

body, input, button {
    color: ${colors.darkFont};
    /* font-size: 16px; */
}

button{
    cursor: pointer;
}

.Toastify__toast--success {
    background: ${colors.success} !important;
 }

.Toastify__toast--error {
    background: ${colors.secondary} !important;
 }
`;
