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
    border: 1px solid ${theme.colorMiddleGreenYellow};
    outline: none;

    
    &:hover {
        background: ${theme.colorMiddleGreenYellowLight};
    }
`;
