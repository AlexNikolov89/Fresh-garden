import styled from 'styled-components'
import {theme} from './index';
import {NavLink} from 'react-router-dom'
import {GenericButton} from "./Buttons";

export const ShoppingCartContainer = styled.div `
    width: calc(270px + 2 * ${theme.spaceS});
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: ${theme.colorMiddleGreenYellowVeryLight};    
    position: sticky;
    padding: ${theme.spaceS};
    top: calc(0px + ${theme.controlHeightXL});
    border: 1px solid ${theme.colorMiddleGreenYellowLight};
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
        position: fixed;
        height: 70vh;
        top: 10%; 
        left: auto;
        overflow-y: scroll;
    }
`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid ${theme.colorMiddleGreenYellowLight};
    border-bottom: 1px solid ${theme.colorMiddleGreenYellowLight};
    height: ${theme.controlHeightDefault};
    width: 100%;
`;

export const Title = styled.h3`
    font-size: ${theme.fontSizeM};
    font-weight: ${theme.fontWeightRegular};
    color: ${theme.colorDefaultText};
`;

export const MiddleContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    
    width: 100%;
    height: auto;
`;

export const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.colorMiddleGreenYellowLight};
    z-index: 43;
        
    height: 100px;
    width: 100%;
`;

export const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 70%;
    height: 100%;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 100%;
    width: 100%;
`;

export const Image = styled.img`
    background: green;
    border-radius: ${theme.borderRadiusS};
    
    height: 70px;
    width: 70px;
`;

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: ${theme.spaceS};
    
    height: 70%;
    width: 100%;
`;

export const ProductName = styled.h4`
    font-size: ${theme.fontSizeDefault};
    font-weight: ${theme.fontWeightRegular};
    color: ${theme.colorDefaultText};
`;

export const QuantityContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`;

export const Decrement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fontSizeDefault};
    border: 1px solid ${theme.colorMiddleGreenYellowLight};    
    border-radius: ${theme.borderRadiusS};
    background-color: ${theme.colorMiddleGreenYellowLight};
    height: 25px;
    width: 25px;
    i.fas {
        color: ${theme.colorDarkOliveGreen};
    }
    
    &:hover, &.active {
          background-color: ${theme.colorMiddleGreenYellowLight};
          border: 1px solid ${theme.colorDarkOliveGreen};
          i.fas {
              color: ${theme.colorDarkOliveGreen}
          }
    }
`;

export const Increment = styled(Decrement)``;

export const Count = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDefaultText};
    border-top: 1px solid ${theme.colorMiddleGreenYellowLight};
    border-bottom: 1px solid ${theme.colorMiddleGreenYellowLight};
    height: 25px;
    width: 25px;
    background-color: ${theme.colorBackgroundColor};
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;   
    height: 70%; 
    width: 100%;
`;

export const Delete = styled(Decrement)`
    border: none;
    background: none;
    
    &:hover, &.active {
        border: none;
        background: none;
        i.fas {
            color: ${theme.colorDarkRed};
        }
    }
`;

export const Price = styled(ProductName)`
  height: 19px;
`;

export const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    height: 100px;
    width: 100%;
`;

export const EmptyCart = styled(Delete)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${theme.colorDefaultText};
    width: 100%;
    height: ${theme.controlHeightDefault};
`;

export const EmptyCartIcon = styled.div``;

export const TextField = styled.p`
    margin: ${theme.spaceS};
    font-size: ${theme.fontSizeS};
`;

export const CheckoutButton = styled(GenericButton)`
    background-color: ${theme.colorMiddleGreenYellowLight};
    
    &:hover {
        border: 1px solid ${theme.colorDarkOliveGreen};
    }
`;