import styled from 'styled-components';
import {theme} from './index'
import {Count} from "./ShoppingCart";

export const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 410px;
    background: ${theme.colorAlmond};
    cursor: default;
    box-shadow: ${theme.boxShadowGradient};
    border-radius: ${theme.borderRadiusS};
    margin: ${theme.spaceS};

    &.vegetable {
        border-top: 8px solid ${theme.colorMiddleGreenYellowLight};
    }
    &.fruit {
        border-top: 8px solid ${theme.colorMiddleGreenYellowLight};
    }
`;

export const TopContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    height: 250px;
    width: 100%;
`;

export const PromotionIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: ${theme.colorAlmond};
    padding: 4px;
    margin: ${theme.spaceXS};
    border-radius: 100%;
    box-shadow: inset 0 4px 6px rgba(F,F,F,0.225);
    //box-shadow: ${theme.boxShadowLight};

    svg {
        width: 35px;
        height: 35px;
        fill: ${theme.colorDarkOliveGreen};

    }

    i {
        color: ${theme.colorDefaultWhite};
        font-size: ${theme.fontSizeM};
    }
`;
export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 250px;
`;

export const Image = styled.img`
    height: 100%;
    width: -moz-available;
    width: 100%;
    object-fit: cover;
    border-radius: ${theme.borderRadiusS};
`;

export const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${theme.spaceS};
    
    width: 100%;
    height: calc(410px - 250px);
`;

export const UpperContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:  space-between;
    align-items: flex-start;
    
    width: 100%;
    height: calc(100% - 25px);
`;

export const UpperLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const UpperRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
`;

export const LowerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    
    width: 100%;
    height: 25px;    
`;

export const ProductName = styled.p`
    font-size: ${theme.fontSizeDefault};
    font-weight: ${theme.fontWeightRegular};
    color: ${theme.colorDefaultText};
`;

export const Location = styled.p`
    font-size: ${theme.fontSizeS};
    font-weight: ${theme.fontWeightLight};
    color: ${theme.colorDefaultText};
`;

export const DeliveryOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

export const PickUpIcon = styled.div`
    margin-right: ${theme.spaceXS};
    margin-top: ${theme.spaceXS};
    i {
      font-size: ${theme.fontSizeDefault};
      color: ${theme.colorDarkPurple};
    }
`;

export const DeliveryIcon = styled.div`
    margin-right: ${theme.spaceXS};
    margin-top: ${theme.spaceXS};
    i {
      font-size: ${theme.fontSizeDefault};
      color: ${theme.colorDarkBlue};
    }
`;

export const DeliveryDistance = styled(Location)`
    align-self: flex-end;
`;

export const SellerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;    
`;

export const Portrait = styled.img`
    height: 70px;
    width: 70px;
    border-radius: 100%;
    background: grey;
    box-shadow: ${theme.boxShadowInset};
`;

export const SellerName = styled(Location)`
    margin-top: ${theme.spaceXXS}
`;

export const ExpiryDate = styled(Location)``;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    
    height: 100%;
    width: 70%;
`;

export const StockContainer = styled(PriceContainer)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 30%;

`;

export const Stock = styled(Count)`
    border: 1px solid ${theme.colorMiddleGreenYellowLight};
    min-width: 25px;
    width: fit-content;
    padding: 4px;
`;

export const AddToCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${theme.spaceXS};
    border-radius: ${theme.borderRadiusS};
    height: 25px;
    width: 25px;

    i {
        font-size: ${theme.fontSizeDefault};
        color: ${theme.colorDarkOliveGreen};
    }
    
    &:hover, :focus, &.active {
          box-shadow: ${theme.boxShadowInset};
    }
`;

export const CurrencyTag = styled(Location)`
    align-self: center;
    font-weight: ${theme.fontWeightLight};
    color: ${theme.colorDefaultText};
`;

export const PriceTag = styled(ProductName)`
    margin-left: ${theme.spaceXXS};
    margin-right: ${theme.spaceXXS};
`;

export const Unit = styled(ProductName)``;