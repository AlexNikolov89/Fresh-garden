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
    background-color: ${theme.middleGreenYellow};
`;

export const FormConatiner = styled.div `
    width: 40%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-right: 150px;
`;

export const Icons = styled.div `
    display: flex-end;
   i {
       color: ${theme.darkOliveGreen};
       text-align: center;
       float: right;
       font-size: 1.6rem;
       padding: 30px;
   }

   i:hover{
       cursor: pointer;
   }

   i:active {
        color: ${theme.middleGreenYellow};
   }
`;

export const OpenCart = styled.div `
    position: absolute;
    bottom: -600px;
`

export const Logo = styled.img `
`;

export const LogoConatiner = styled.div `
   display: flex;

`;


