import {createGlobalStyle} from 'styled-components'



export const GlobalStyle = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
     
     * {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
     }

    html, body {
        font-weight: 400;
        line-height: 1.6;
        min-height: 100vh;
        font-family: 'Roboto', sans-serif;
    }

`;

export const theme = {
    // Colors:
    fontColorDEfault: '#222222',
    almond: '#EDDED4',
    middleGreenYellow: '#B4CB67',
    maxYellowRed: '#FFC370',
    darkOliveGreen: '#5D6D37',
    capputMortum: '#4F2E2B',
    backgroundColor:'#F2F2F2',
    titleColor: '#5D6D37',



    // Fonts:
    fontSize: '1.6rem',
    fontWeightLight: '400',
    fontWeightRegular: '500',
    fontWeightBold: '700',

    // Box Shadows:
    boxShadow: `10px 10px 5px #aaaaaa`,
}