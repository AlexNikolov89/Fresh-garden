import styled from 'styled-components'
import {theme} from './index'
import {NavLink} from "react-router-dom";


export const HeaderContainer = styled.div `
    height: ${theme.controlHeightXL};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: ${theme.colorMiddleGreenYellow};
    
    @media (max-width: ${theme.mediaQueryScreenWidth}) {
        display: none;
    }
`;

export const FormContainer = styled.div `
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100%;
    min-width: 280px;
`;

export const Icons = styled.div `
    display: flex;
    min-width: 80px;
    
    cursor: default;
    
    i.fas {
       color: ${theme.colorCaputMortuum};
       text-align: center;
       float: right;
       font-size: ${theme.fontSizeM};
       padding: ${theme.spaceDefault};
       cursor: default;
    }

    i.fas:hover, :active {
        color: ${theme.colorDefaultGrey};
    }
`;

export const OpenCart = styled.div `
    position: absolute;
    bottom: -600px;
`;


export const NavLinkHome = styled(NavLink)``;

export const NavLinkAbout = styled(NavLink)``;

export const NavLinkProfile = styled(NavLinkAbout)``;

export const LogoContainer = styled.div `
   display: flex;
`;

export const Logo = styled.img`
    width: 60px;
`;

