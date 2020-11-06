import styled from 'styled-components';
import {theme} from './index'

export const CardContainer = styled.div `
    width: 270px;
    height: 410px;
    background: ${theme.colorAlmond};
    cursor: pointer;
    box-shadow: ${theme.boxShadow};
    box-sizing: border-box;
    margin-top: 30px;
`;

export const TopContainer = styled.div `
    height: 250px;
    width: 270px;
    border: 1px solid black;
`;

export const Image = styled.img `
    height: 100%;
    width: 100%;
`;

export const BottomConatiner = styled.div `

    i {
        float: right;
        font-size: 1.4rem;
        color: #5D6D37;
        text-align: center;
        margin: 40px;
        cursor: pointer;
    }

    i:hover {
        cursor: pointer;
    }

 
    i:active {
         color: ${theme.colorMiddleGreenYellow};
    }
`;

export const Info = styled.div `
    display: block;
    padding: 15px;
`

export const Text = styled.p `
    font-size: 1.2rem;
    font-weight: ${theme.fontSizeBold};
    color: #5D6D37;
    width: 50%;

    &:hover {
        //font-size: 1.3rem;
        cursor: pointer;
    }
`;

export const Price = styled.p `
    width: 50%;
   color: ${theme.colorDarkOliveGreen};
    
    span {
        font-weight: ${theme.fontSizeBold};
        color: ${theme.colorDarkOliveGreen};
    }
`;