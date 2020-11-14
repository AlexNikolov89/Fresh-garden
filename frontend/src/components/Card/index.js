import React, {Fragment, useState} from 'react'
import {
    CardContainer,
    TopContainer,
    Image,
    BottomContainer,
    LowerContainer,
    UpperContainer,
    ProductName,
    Location,
    DeliveryOptions,
    PickUpIcon,
    DeliveryIcon,
    SellerContainer,
    Portrait,
    SellerName,
    StockContainer,
    Stock,
    PriceContainer,
    CurrencyTag,
    PriceTag,
    Unit,
    UpperRightContainer,
    UpperLeftContainer,
    AddToCart,
    PromotionIcon,
    DeliveryDistance, ExpiryDate, ImageContainer
} from '../../style/Card';
import Carrot from '../../assets/images/carot.jpg'
import defaultRuth from '../../assets/defaultRuth.PNG'
import { ReactComponent as PromoIcon} from '../../assets/icons/disc_2.svg';
import {cartAction} from "../../store/actions/cartAction";
import {useDispatch} from "react-redux";
import {ADD_TO_CART} from "../../helpers/constants";

const Card = ({product, changeIcon}) => {
    const dispatch = useDispatch();
    const [availableStock, setAvailableStock] = useState(product.stock)
    const priceSuffix = product.price % 1 === 0 ? '' : '0';

    const addToCartHandler = () => {
        // TODO resolve conflict issue of two parties ordering complete stock
        const fetchNewCart = async () => {
            await dispatch(cartAction(`cart/add/${product.id}/`, 'POST', ADD_TO_CART))
        }
        fetchNewCart();

        if (availableStock === 0) return
        return setAvailableStock(availableStock - 1)
    }

    return (
        <Fragment>
            <CardContainer>
                <TopContainer>
                    {product.promotion && <PromotionIcon><PromoIcon /></PromotionIcon>}
                    <ImageContainer><Image src={product.image ? product.image : Carrot} /></ImageContainer>
                </TopContainer>

                <BottomContainer>
                    <UpperContainer>
                        <UpperLeftContainer>
                            <ProductName>{product ? product.name : "Default Rüeblis"}</ProductName>
                            <Location>Garden @ {product.location ? product.location : "Default Dürnten"}</Location>
                            <DeliveryOptions>
                                <PickUpIcon>{changeIcon === 'pickup' ? (<i className="fas fa-hiking"></i>) : (<i className="fas fa-truck"></i>)}</PickUpIcon>
                                {product.deliver_within_radius && <DeliveryIcon><i className="fas fa-truck"></i></DeliveryIcon>}
                                {product.deliver_within_radius && <DeliveryDistance>up to {product.deliver_within_radius}km</DeliveryDistance>}
                            </DeliveryOptions>
                            <ExpiryDate>Expiration {product.expiration_date ? product.expiration_date : "01.01.2021"}</ExpiryDate>
                        </UpperLeftContainer>
                        <UpperRightContainer>
                            <SellerContainer>
                                <Portrait src={product.author ? product.author.profile_picture : defaultRuth} />
                                <SellerName>{product.author ? product.author.first_name + ' ' + product.author.last_name : "Default Ruth"}</SellerName>
                            </SellerContainer>
                        </UpperRightContainer>
                    </UpperContainer>

                    <LowerContainer>
                        <StockContainer>
                            <Stock>{product.stock ? availableStock : "0"}</Stock>
                            <AddToCart onClick={addToCartHandler}><i className="fas fa-shopping-basket"></i></AddToCart>
                        </StockContainer>
                        <PriceContainer>
                            <CurrencyTag>CHF</CurrencyTag>
                            <PriceTag>{product.price ? product.price + priceSuffix : "6.90"}</PriceTag>
                            <Unit>/ {product.unit ? product.unit : "Kg"}</Unit>
                            {/*<Unit>{unit === 'kg' ? 'Kg' : 'Pc'}</Unit>  */}
                        </PriceContainer>
                    </LowerContainer>
                </BottomContainer>
            </CardContainer>
        </Fragment>
    )
}

export  default Card;