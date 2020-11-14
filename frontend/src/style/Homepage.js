import styled from 'styled-components';
import background from '../assets/images/fresh_hands.jpg';
import {theme} from './index'

export const HomeContainer = styled.div `
    height: 100%;
    width: 100%;
    min-height: calc(100vh - 240px - 64px - 48px);
`;

export const TopContainer = styled.div `
    width: 100%;    
    height: 240px;
    background-image: url("${background}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: center; 
`;

export const Image = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 240px;
`;

export const Slogan = styled.h2`
    color: ${theme.colorDefaultWhite};
    font-size: ${theme.fontSizeXXL};
    font-weight: ${theme.fontWeightBold};
    margin-left: ${theme.spaceDefault};
`;

export const BottomContainer = styled.div `
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background: ${theme.colorBackgroundColor};
    min-height: calc(100vh - 240px - 64px - 48px);

    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
        flex-direction: column-reverse;
    }
`;

export const Box = styled.div `
    width: calc(100% - calc(5 * ${theme.controlHeightXL}));
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: space-evenly;
    height: calc(100% - 68px);
    background: ${theme.colorBackgroundColor};
    margin-top: ${theme.spaceS};
    padding-bottom: 70px;
    min-height: calc(100vh - 240px - 64px - 48px);


    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
        width: 100%;
    }
`;

export const SideBox = styled.div`
    display: flex;
    position: relative;
    right: 0;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: calc(5 * ${theme.controlHeightXL});
    border-left: 1px solid ${theme.colorMiddleGreenYellowLight};
    background: ${theme.colorBackgroundColor};
    height: auto;
    padding-bottom: 70px;
    min-height: calc(100vh - 240px - 64px - 48px);


    @media (max-width: ${theme.mediaQueryScreenWidth}){
        width: 100%;
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid ${theme.colorMiddleGreenYellowLight};

    }
`;

export const PromotedProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: calc(5 * ${theme.controlHeightXL} - 1px);
    padding-top: ${theme.spaceS};
    background: ${theme.colorBackgroundColor};
    height: 100%;
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
        width: 100%;
    }
`;

export const Text = styled.h2 `
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 50px;
    height: 40px;
    width: 100%;
    color: ${theme.colorTitle};
    text-shadow: grey 0.2em 0.2em 0.2em;
    font-size: ${theme.fontSizeL};

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
`

export const Logo = styled.img `

`;

export const CardContainer = styled.div `
  
`;

export const About = styled.div `
    display: flex;
    justify-content: center;
    text-align: center;
`;

export const AboutText = styled.h3 `
  color: ${theme.colorRandomText};
  padding: 40px;
  line-height: 2.0;
  font-weight: normal;
  opacity: 0.7;
  font-size: ${theme.fontSizeDefault}
`

