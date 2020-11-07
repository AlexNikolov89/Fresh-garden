import {createGlobalStyle} from 'styled-components'



export const GlobalStyle = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&display=swap');
     
     * {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
     }

    html, body {
        font-weight: 400;
        line-height: 1.6;
        min-height: 100vh;
        font-family: 'Hind', sans-serif;
    }

`;

export const theme = {
    // Colors:
    colorDefault: '#222222',
    colorAlmond: '#EDDED4',
    colorMiddleGreenYellow: '#B4CB67',
    colorMaxYellowRed: '#FFC370',
    colorDarkOliveGreen: '#5D6D37',
    colorCapputMortum: '#4F2E2B',
    colorBackgroundColor:'#fcf9f4',
    colorTitle: '#5D6D37',



    // Fonts:
    fontSize: '1.6rem',
    fontSizetLight: '400',
    fontSizeRegular: '500',
    fontSizeBold: '700',

    // Box Shadows:
    boxShadow: `10px 10px 5px #aaaaaa`,
    boxShadowLigh: `0 1px 4px rgba(0, 0, 0, 0.3)`,

}