import styled from 'styled-components'
import {theme} from "./index";

export const GenericButton = styled.button`
    height: ${theme.controlHeightM};
    width: 70%;
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
