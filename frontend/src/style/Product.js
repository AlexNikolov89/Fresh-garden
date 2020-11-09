import styled from 'styled-components'
import {theme} from './index';



export const ProductConatiner = styled.div `
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    margin-left: 10px;
    cursor: pointer;
    margin-bottom: 15px; 
`;

export const ProductImg = styled.img `
    width: 15%;
    border-radius: 10px;
 `;

export const InfoConatiner = styled.div `
    display: flex;
    align-items: center;
    margin-left: 15px;
    justify-content: space-evenly;
    
`;

export const Info = styled.div `
    display: flex;
    width: 50%;
`;

export const Quantity = styled(InfoConatiner) `
    margin-left: 60px;
    width: 20%;
`;

export const TotalPrice = styled(InfoConatiner) `
    margin-left: 150px;
    width: 30%;
    display: flex;
    
    i {
        margin-left: 100px;
        font-size: ${theme.controlHeightM};
        color: ${theme.colorDarkOliveGreen};

        &:active {
            color: ${theme.colorMiddleGreenYellow}
        }
    }
`;

export const Button = styled.button `
    width: 40px;
    height: 40px;
    background: ${theme.colorDarkOliveGreen};
    border: none;
    outline: none;
    

    i {
        font-size: ${theme.fontSizeM};
        font-weight: 700;
        color: white;

        &:active {
            color: ${theme.colorMiddleGreenYellow}
        }
    }
`;

export const Description = styled.h3 `
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDarkOliveGreen};
    margin-right: 20px;

    /* @media (max-width: 1000px) {
        font-size: 0.5rem;
    }*/
`;


export const Price = styled.h3 `
margin-left: 20px;
font-size: ${theme.fontSizeM};
color: ${theme.colorDefaultText}
`;


export const ProductQ = styled.h3 `
    padding: 0 20px;
    font-size: ${theme.spaceDefault};
`;



