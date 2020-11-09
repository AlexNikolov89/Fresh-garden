import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&display=swap');
    :root {
        font-size: 62.5%; /* 1.6 rem = 16px*/
    }
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
    // Media Queries:
    mediaQueryScreenWidth: '680px',

    // Colors:
    colorDefault: '#222222',
    colorAlmond: '#EDDED4',
    colorMiddleGreenYellow: '#B4CB67',
    colorMaxYellowRed: '#FFC370',
    colorDarkOliveGreen: '#5D6D37',
    colorCaputMortuum: '#4F2E2B',
    colorBackgroundColor:'#fcf9f4',
    colorTitle: '#5D6D37',
    colorRandomText: '#bbbfca',
    colorDefaultGrey: '#D8D8D8',
    colorDefaultText: '#4C4C4C',

    // Fonts (Visual Hierarchy - 3:4 Method)
    fontSizeXXXXXL: "11.9rem",
    fontSizeXXXXL: "8.9rem",
    fontSizeXXXL: "6.7rem",
    fontSizeXXL: "5.0rem",
    fontSizeXL: "3.7rem",
    fontSizeL: "2.8rem",
    fontSizeM: "2.1rem",
    fontSizeDefault: "1.6rem",
    fontSizeS: "1.2rem",
    fontSizeXS: "0.9rem",
    fontSizeXXS: "0.5rem",
    fontWeightLight: '400',
    fontWeightRegular: '500',
    fontWeightBold: '700',

    // Properties
    borderRadiusS: "2px",
    borderRadiusDefault: "4px",
    borderRadiusM: "5px",
    borderRadiusL: "8px",
    borderRadiusXL: "24px",

    // Animations
    transitionDefault: "0.1s",
    transitionLong: "0.4s",

    // Box Shadows:
    boxShadowDark: `-5px 6px 15px 1px rgba(0,0,0,0.50)`,
    boxShadowLight: `-5px 6px 15px 1px rgba(0,0,0,0.25)`,
    boxShadowLighter: `-5px 6px 15px 1px rgba(0,0,0,0.15)`,
    boxShadowLightest: `-5px 6px 15px 1px rgba(0,0,0,0.05)`,
    boxShadowNav: `2px 0 24px 0 rgba(0,0,0,0.04)`,
    boxShadowTiles: `0 2px 24px 0 rgba(0,0,0,0.04)`,
    boxShadowInTiles: `0 1px 3px 0 rgba(0,0,0,0.2)`,
    
    // Sizes
    controlHeightDefault: "40px",
    controlHeightM: "24px",
    controlHeightS: "32px",
    controlHeightL: "48px",
    controlHeightXL: "64px",
    spaceXXS: "4px",
    spaceXS: "8px",
    spaceS: "16px",
    spaceDefault: "20px",
    spaceM: "24px",
    spaceL: "32px",
    spaceXL: "48px",
    spaceXXL: "220px",
}