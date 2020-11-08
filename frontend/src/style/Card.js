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
    //border-top: 10px solid ${theme.colorDarkOliveGreen};
`;

export const TopContainer = styled.div `
    height: 250px;
    width: 270px;
`;

export const Image = styled.img `
    height: 100%;
    width: 100%;

    &:hover {
        opacity: 0.6;
    }
`;


export const BottomConatiner = styled.div `

    i {
        display: flex;
        justify-content: flex-end;
        font-size: 1.6rem;
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
    color: ${theme.colorDarkOliveGreen}
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

export const Wrapp = styled.div `
    display: flex;
`;

export const KG = styled.p `
    margin-top: 10px;
`;

export const Price = styled.p `
    width: 50%;
    padding-top: 10px;
    font-size: 1.0rem;
    
    span {
        font-weight: ${theme.fontSizeBold};
        opacity: 0.4;
    }
`;

export const Date = styled.h4 `
    padding-top: 10px;
`