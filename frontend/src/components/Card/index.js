import React, {Fragment} from 'react'
import {
    CardContainer,
    TopContainer,
    Image,
    BottomContainer,
    LowerContainer,
    UpperContainer,
    ProductName,
    Location,
    ExpiryDate,
    DeliveryOptions,
    PickUpIcon,
    DeliveryIcon,
    SellerContainer,
    Portrait,
    SellerName,
    StockContainer,
    Stock,
    PriceContainer, CurrencyTag, PriceTag, Unit, UpperRightContainer, UpperLeftContainer, AddToCart, PromotionIcon
} from '../../style/Card';
import Carrot from '../../assets/carot.jpg'
import defaultRuth from '../../assets/defaultRuth.PNG'
import { ReactComponent as PromoIcon} from '../../assets/icons/disc_2.svg';

const Card = () => {

    return (
        <Fragment>
            <CardContainer>
                <TopContainer>
                    <PromotionIcon><PromoIcon /></PromotionIcon>
                    <Image src={Carrot} />
                </TopContainer>

                <BottomContainer>
                    <UpperContainer>
                        <UpperLeftContainer>
                            <ProductName>Ruth's Rüebli</ProductName>
                            <Location>Garden @ Grüningen</Location>
                            <DeliveryOptions>
                                <PickUpIcon><i className="fas fa-hiking"></i></PickUpIcon>
                                <DeliveryIcon><i className="fas fa-truck"></i></DeliveryIcon>
                            </DeliveryOptions>
                            {/*<ExpiryDate>Fresh until 11.11.2020</ExpiryDate>*/}
                        </UpperLeftContainer>
                        <UpperRightContainer>
                            <SellerContainer>
                                <Portrait src={defaultRuth} />
                                <SellerName>Ruth Meyer</SellerName>
                            </SellerContainer>
                        </UpperRightContainer>
                    </UpperContainer>

                    <LowerContainer>
                        <StockContainer>
                            <Stock>5</Stock>
                            <AddToCart><i className="fas fa-shopping-basket"></i></AddToCart>
                        </StockContainer>
                        <PriceContainer>
                            <CurrencyTag>CHF</CurrencyTag>
                            <PriceTag>6.50</PriceTag>
                            <Unit>/ Kg</Unit>
                        </PriceContainer>
                    </LowerContainer>
                </BottomContainer>
            </CardContainer>
        </Fragment>
    )
}

export  default Card;