import styled from 'styled-components'
import {theme} from "./index";

export const StandardButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    cursor: default;
    background-color: ${theme.colorMiddleGreenYellowLight};
    height: ${theme.controlHeightM};
    border-radius: 26px;
    color: ${theme.colorDefaultText};
    border: none;    
    font-size: ${theme.fontSizeDefault};
    outline: none;
    text-decoration: none;
    text-align: center;
    margin-right: 0;
    padding: 16px 36px;
    -webkit-transition: box-shadow .3s ease;
    transition: box-shadow .3s ease;
    line-height: 18px;
    font-weight: 600;
    
    i.fas {
        color: ${theme.colorDarkOliveGreen};
    }
    
    
    :hover {
        box-shadow: ${theme.boxShadowLighter};
        background: ${theme.colorMiddleGreenYellowLightHover};
    }
    
    :focus, &.active {
        box-shadow: ${theme.boxShadowInset};
        background: ${theme.colorMiddleGreenYellowLight};
    }  
`;

export const GenericButton = styled.button`
    height: ${theme.controlHeightM};
    width: 70%;
    min-width: 120px ;
    border-radius: 26px;
    color: ${theme.colorDefaultText};
    background: ${theme.colorMiddleGreenYellowVeryLight};
    border: none;    
    cursor: default;
    font-size: ${theme.fontSizeDefault};
    outline: none;

    
    &:hover, :focus {
        box-shadow: ${theme.boxShadowInset};
        background: ${theme.colorMiddleGreenYellowLight};
    }
`;

export const SignUpButton = styled.button`
    height: ${theme.controlHeightM};
    width: 15%;
    border-radius: 26px;
    color: ${theme.colorDefaultText};
    color: ${theme.colorDefaultWhite};
    font-weight: ${theme.fontWeightBold};
    background: ${theme.colorDarkOliveGreen};
    border: none;    
    cursor: default;
    font-size: ${theme.fontSizeDefault};
    outline: none;
    margin-top: 10px;

    
    &:hover {
        box-shadow: ${theme.boxShadowInset};
        background: ${theme.colorMiddleGreenYellowLight};
    }
`;

export const SignInButton = styled.button`
    height: ${theme.controlHeightL};
    width: 15%;
    border-radius: 26px;
    color: ${theme.colorDefaultWhite};
    font-weight: ${theme.fontWeightBold};
    font-size: ${theme.fontSizeDefault};
    background: ${theme.colorDarkOliveGreen};
    border: none;    
    cursor: default;
    outline: none;

    
    &:hover, :focus {
        box-shadow: ${theme.boxShadowInset};
        background: ${theme.colorMiddleGreenYellowLight};
    }
`;
