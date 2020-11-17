import styled from 'styled-components'
import {theme} from './index';


export const ProductContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 5px;
    cursor: pointer;
    border: 1px solid ${theme.colorDefaultGrey};
    width: 450px;
    height: 140px;

    @media (max-width: ${theme.mediaQueryScreenWidth}){
        width: 100%;
    }
    
    @media (max-width: 360px){
        width: 100%;
    }
`;

export const ProductImg = styled.img `
    width: 160px;
    height: 130px;
    border-radius: ${theme.borderRadiusS};
    
     @media (max-width: 360px){
        width: 100px;
        height: 80px;
    }
 `;

export const InfoConatiner = styled.div `
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 60%;
    
     @media (max-width: 360px){
          
     }
`;

export const Info = styled.div `
 width: 100%;
 
  @media (max-width: 360px){
        width: 100%;
    }
`;


export const ProductTitle = styled.h3 `
 font-size: ${theme.fontSizeDefault};
 color: ${theme.colorTitle};
 
 
`;

export const Seller = styled.p `
 font-size: ${theme.fontSizeDefault};
`;

export const StockDiv = styled.div `
 display: flex;
 padding-left: 30px;
`;

export const Wrap = styled.div `
 margin-top: 15px;
`;

export const AvailibleStock = styled.div `
  display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDefaultText};
    border: 1px solid ${theme.colorMiddleGreenYellowVeryLight};
    //border-bottom: 1px solid ${theme.colorMiddleGreenYellowVeryLight};
    height: 30px;
    width: 30px;
    background-color: ${theme.colorBackgroundColor};
`;

export const Count = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDefaultText};
    border: 1px solid ${theme.colorMiddleGreenYellowVeryLight};
    height: 30px;
    width: 30px;
    background-color: white;
`;

export const WrapPrice = styled.div `
 display: flex;
`;

export const PriceContainer = styled.div `
 display: flex;
 margin-left: 100px;
 font-size: ${theme.fontSizeDefault};
 
 @media (max-width: 360px) {
  display: none;
 }
`;

export const Price = styled.h4 `
`;

export const Unit = styled.div ``;

export const Quantity = styled.div `
    display: flex; 
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

export const Delete = styled.div `
 float: right;
  border: none;
  background: none;
  
        i {
            color: ${theme.colorDarkOliveGreen};
            font-size: ${theme.fontSizeM};
        }
         &:hover, &.active {
        border: none;
        background: none;
        color: ${theme.colorDarkRed};
        box-shadow: ${theme.boxShadowInset};
    }
`;




