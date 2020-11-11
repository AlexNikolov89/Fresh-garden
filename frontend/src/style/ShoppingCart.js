import styled from 'styled-components'
import {theme} from './index';
import {NavLink} from 'react-router-dom'

export const ShoppingCartContainer = styled.div `
    width: calc(270px + ${theme.spaceS});
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: ${theme.colorBackgroundColor};    
    position: sticky;
    top: calc(0px + ${theme.controlHeightXL});
    border-bottom: 1px solid ${theme.colorMiddleGreenYellowVeryLight};
`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid ${theme.colorMiddleGreenYellowVeryLight};
    
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
    justify-content: center;
    align-items: flex-start;
    
    width: 100%;
    height: 100%;
`;

export const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.colorMiddleGreenYellowVeryLight};
        
    height: 130px;
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
    
    height: 90px;
    width: 90px;
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
    background-color: ${theme.colorMiddleGreenYellowVeryLight};
    height: 35px;
    width: 35px;
    i.fas {
        color: ${theme.colorDarkOliveGreen};
    }
    
    &:hover, :focus, &.active {
          background-color: ${theme.colorMiddleGreenYellowLight};
          border: 1px solid ${theme.colorMiddleGreenYellowVeryLight};
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
    border-top: 1px solid ${theme.colorMiddleGreenYellowLight};
    border-bottom: 1px solid ${theme.colorMiddleGreenYellowLight};
    height: 35px;
    width: 35px;
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
    
    &:hover, :focus, &.active {
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
    justify-content: flex-start;
    align-items: center;
    
    height: 80px;
    width: 100%;
`;

export const EmptyCart = styled(Delete)`
    color: ${theme.colorDefaultText};
`;

export const CheckoutButton = styled(NavLink)`
    height: ${theme.controlHeightL};
    width: 70%;
    border-radius: 26px;
    color: ${theme.colorDarkOliveGreen};
    background: ${theme.colorMiddleGreenYellowVeryLight};
    border: none;    
    cursor: default;

    &:hover {
        background: ${theme.colorMiddleGreenYellowLight}
    }
`;