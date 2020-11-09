import styled from 'styled-components';
import background from '../assets/Veggies.jpg';
import {theme} from './index'

export const HomeContainer = styled.div `
    height: 100%;
    width: 100%;
`;

export const TopContainer = styled.div `
    background-image: url("${background}");
    background-repeat: no-repeat;
    background-size: cover; 
    opacity: 0.8;
`;

export const Image = styled.div `
    width: 100%;
    height: 240px;
`;

export const HorizontalLine = styled.hr `
    width: 80%;
    margin-top: 20px;
    margin-left: 150px;
    border: 0;
    height: 1px;
    background: #333;
    background: linear-gradient(to right, #ccc, #333, #ccc);
`;

export const BottomContainer = styled.div `
    display: block;
    background: ${theme.colorBackgroundColor};
`;

export const Box = styled.div `
    height: 100%;
    width: 100%;
    /* display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px; */
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: space-evenly;
    padding: 40px 0;
    height: calc(100% - 68px);
    background: ${theme.colorBackgroundColor};  
`;

export const Text = styled.h2 `
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 50px;
    font-size: 1.8rem;
    height: 40px;
    width: 100%;
    color: ${theme.colorTitle};
    text-shadow: grey 0.2em 0.2em 0.2em;

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
    line-height: 3;
    font-weight: normal;
    opacity: 0.7;
`

