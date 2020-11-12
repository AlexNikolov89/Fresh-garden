import styled from 'styled-components'
import {theme} from './index';


export const ProductContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 15px;
    margin-left: 10px;
    cursor: pointer;
    margin-bottom: 15px; 
    border: 1px solid ${theme.colorDefaultGrey};
    box-shadow: ${theme.boxShadowLighter};
    width: 100%;
    border-radius: ${theme.borderRadiusS};
    

    @media (max-width: ${theme.mediaQueryScreenWidth}){
        width: 100%;
    }
`;

export const ProductImg = styled.img `
    width: 25%;
    border-radius: ${theme.borderRadiusS};
 `;

export const InfoConatiner = styled.div `
    display: flex;
    align-items: center;
    margin-left: 15px;
    justify-content: space-between;
`;

export const Description = styled.h3 `
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDarkOliveGreen};
    padding-bottom: 10px;
    padding-left: 10px;
`;

export const Items = styled.p `
    font-size: ${theme.fontSizeDefault};
    padding: 10px;
`;

export const Quantity = styled(InfoConatiner) `
    //margin-left: 30px;
    width: 45%;
`;

export const Increment = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fontSizeDefault};
    border: 1px solid ${theme.colorMiddleGreenYellowVeryLight};    
    border-radius: ${theme.borderRadiusS};
    background-color: ${theme.colorMiddleGreenYellowVeryLight};
    height: 30px;
    width: 30px;
    i.fas {
        color: ${theme.colorDarkOliveGreen};
    }
    
    &:hover, &.active {
          background-color: ${theme.colorMiddleGreenYellowLight};
          box-shadow: ${theme.boxShadowInset};

          i.fas {
              color: ${theme.colorDarkOliveGreen}
          }
    }
`;

export const Decrement = styled(Increment) ``;

export const Count = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDefaultText};
    border-top: 1px solid ${theme.colorMiddleGreenYellowVeryLight};
    border-bottom: 1px solid ${theme.colorMiddleGreenYellowVeryLight};
    height: 30px;
    width: 30px;
    background-color: ${theme.colorBackgroundColor};
`;

export const Info = styled.div `
    display: block;
`;

export const TotalPrice = styled(InfoConatiner) `
    width: 30%;
    display: flex;

    /* &:hover, &.active {
        border: none;
        background: none;
        i  {
            color: ${theme.colorDarkRed};
            margin-left: 100px;
        }
    } */
`;

export const Price = styled.h3 `
//margin-left: 20px;
font-size: ${theme.fontSizeDefault};
color: ${theme.colorDefaultText}
`;

export const Delete = styled.button `
    border: none;
    outline: none;
    background: ${theme.colorBackgroundColor};

    i {
        margin-left: 50px;
        font-size: ${theme.fontSizeM};
        color: ${theme.colorDarkOliveGreen};

        &:hover, &.active {
        border: none;
        background: none;
        color: ${theme.colorDarkRed};
        box-shadow: ${theme.boxShadowInset};
    }
`;



