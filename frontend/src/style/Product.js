import styled from 'styled-components'
import {theme} from './index';



export const ProductContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
    margin-left: 10px;
    cursor: pointer;
    margin-bottom: 15px; 
    border: 1px solid ${theme.colorDefaultGrey};
    box-shadow: ${theme.boxShadowLight};
    width: 100%;

    /* @media (max-width: ${theme.mediaQueryScreenWidth}){
        width: 660px;
    
    } */
`;

export const ProductImg = styled.img `
    width: 25%;
    border-radius: ${theme.borderRadiusL};
 `;

export const InfoConatiner = styled.div `
    display: flex;
    align-items: center;
    margin-left: 15px;
    justify-content: space-between;
`;

export const TotalPrice = styled(InfoConatiner) `
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

export const Quantity = styled(InfoConatiner) `
    //margin-left: 30px;
    width: 20%;
`;

export const Button = styled.button `
    background: ${theme.colorDarkOliveGreen};
    border: none;
    outline: none;
    //border-radius: 25%;

    i {
        font-size: ${theme.fontSizeM};
        font-weight: 700;
        color: white;

        &:active {
            color: ${theme.colorMiddleGreenYellow}
        }
    }
`;

export const Info = styled.div `
    display: block;
`;

export const Description = styled.h3 `
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDarkOliveGreen};

`;


export const Price = styled.h3 `
//margin-left: 20px;
font-size: ${theme.fontSizeM};
color: ${theme.colorDefaultText}
`;


export const ProductQ = styled.p `
    padding: 0 20px;
    font-size: ${theme.spaceDefault};
    font-weight: bold;
`;

export const Items = styled.p `
    font-size: ${theme.fontSizeDefault}
`



