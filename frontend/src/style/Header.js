import styled from 'styled-components'
import {theme} from './index'
import {NavLink} from "react-router-dom";
import React from "react";


export const HeaderContainer = styled.div `
    height: ${theme.controlHeightXL};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: ${theme.colorDefaultWhite};
    border-bottom: 1px solid ${theme.colorMiddleGreenYellowVeryLight};
    border-top: 1px solid ${theme.colorMiddleGreenYellowVeryLight};
    
    @media only screen and (max-device-width: ${theme.mediaQueryScreenWidth}){
        position: fixed;
        top: calc(100% - 64px);
        left: 0;
    }
`;

export const FormContainer = styled.div `
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100%;
    min-width: 280px;
    
    @media (max-width: ${theme.mediaQueryScreenWidth}) {
        display: none;
    }
`;

export const Icons = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: calc(3 * ${theme.controlHeightXL});
    
    cursor: default;
    
    i.fas {
        color: ${theme.colorDarkOliveGreen};
        text-align: center;
        float: right;
        font-size: ${theme.fontSizeM};
        cursor: default;
    }
`;

export const NavLinkHome = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    padding: ${theme.spaceS};
    height: 100%;
`;

export const NavLinkAbout = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: ${theme.controlHeightXL};
    cursor: default;
    background-color: ${theme.colorMiddleGreenYellowVeryLight};
    border-left: 1px solid ${theme.colorMiddleGreenYellowVeryLight};
    
    i.fas {
        color: ${theme.colorDarkOliveGreen};
    }
    
    &:hover, :focus {
          background-color: ${theme.colorMiddleGreenYellowLight};
          border-left: 1px solid ${theme.colorMiddleGreenYellowVeryLight};
          i.fas {
              color: ${theme.colorDarkOliveGreen}
          }
    }
`;

export const NavLinkProfile = styled(NavLinkAbout)`
    border-left: 1px solid ${theme.colorMiddleGreenYellowVeryLight};

`;

export const CartIcon = styled(NavLinkAbout)`
    border-left: 1px solid ${theme.colorMiddleGreenYellowVeryLight};
    border-right: 1px solid ${theme.colorMiddleGreenYellowVeryLight};
`;

export const OpenCart = styled.div`
    position: absolute;
    bottom: -600px;
`;

export const LogoContainer = styled.div `
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    
    @media (max-width: ${theme.mediaQueryScreenWidth}) {
        width: ${theme.controlHeightXL};
    }
`;

export const Logo = styled.img`
    width: 60px;
    
    @media (max-width: ${theme.mediaQueryScreenWidth}) {
        width: ${theme.controlHeightXL};
    }
`;


