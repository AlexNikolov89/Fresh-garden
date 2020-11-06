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
    height: 300px;
`;

export const BottomConatiner = styled.div `
  display: block;
  background: ${theme.colorBackgroundColor};
`;

export const Box = styled.div `
   height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-evenly;
  padding: 40px 0;
  height: calc(100% - 68px);
  background: ${theme.colorBackgroundColor};
`

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
`


export const Logo = styled.img `

`;

export const CardContainer = styled.div `
  
`
