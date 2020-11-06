import styled from 'styled-components'
import {theme} from './index'

export const FooterConatiner = styled.div `
    height: 30px;
    width: 100%;
    background-color: ${theme.middleGreenYellow};
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const Text = styled.p `
    color: ${theme.darkOliveGreen};
    font-size: 1.0rem;
`