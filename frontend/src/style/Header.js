import styled from 'styled-components'
import {theme} from './index'


export const HeaderContainer = styled.div `
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: ${theme.colorMiddleGreenYellow};
`;

export const FormConatiner = styled.div `
    width: 40%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-right: 150px;
`;

export const Icons = styled.div `
    display: flex;
   i {
       color: ${theme.colorDarkOliveGreen};
       text-align: center;
       float: right;
       font-size: 1.6rem;
       padding: 30px;
   }

   i:hover{
       cursor: pointer;
   }

   i:active {
        color: ${theme.colorMiddleGreenYellow};
   }
   span {
       color: black;
       margin-left: 5px;
       color: white;
       cursor: pointer;
       position: absolute;
       top: 0;
   }

   @media ( max-width: 800px) {
       display: none;
   }
`;

export const OpenCart = styled.div `
    position: absolute;
    bottom: -600px;
`;

export const Select = styled.select `
    height: 100px;
    width: 100px;
`


export const Logo = styled.img `
    border-radius: 40px;
`;

export const LogoConatiner = styled.div `
   display: flex;
   padding-right: 80px;
`;

export const AboutLogo = styled.img `
    width: 60px;
    margin-top: 20px;
    margin-right: 20px;
    border-radius: 20px;
`;

