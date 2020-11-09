import styled from 'styled-components'
import {theme} from './index';

export const ProductConatiner = styled.div `
    border: 1px solid ${theme.colorAlmond};
    display: flex;
    padding: 30px;
    box-shadow: ${theme.boxShadowLigh};
    cursor: pointer;
    margin-bottom: 30px; 
    background-color: ${theme.colorAlmond}
`;

export const ProductImg = styled.img `
    height: 150px;
    border-radius: 10px;
`;

export const InfoConatiner = styled.div `
    display: flex;
    align-items: center;
    margin-left: 40px; 
`;

export const Info = styled.div `
    display: block;
`;

export const Quantity = styled(InfoConatiner) `
    margin-left: 110px;

`;

export const TotalPrice = styled(InfoConatiner) `
    margin-left: 250px;
    
    i {
        margin-left: 180px;
        font-size: 1.8rem;
        color: white;

        &:active {
            color: ${theme.colorMiddleGreenYellow}
        }
    }
`;

export const Button = styled.button `
    width: 50px;
    height: 50px;
    background: ${theme.colorAlmond};
    border: none;
    outline: none;

    i {
        font-size: 1.6rem;
        font-weight: 700;
        color: white;

        &:active {
            color: ${theme.colorMiddleGreenYellow}
        }
    }
`;

export const Description = styled.h3 `
    font-size: 1.4rem;
    color: ${theme.colorDarkOliveGreen}
`;


export const Name = styled.h2 ``;

export const Price = styled.h3 ``;


export const ProductQ = styled.h3 `
    padding: 0 30px;
`;



