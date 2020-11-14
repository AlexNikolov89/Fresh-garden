import React, {Fragment, useEffect, useState} from 'react'
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
    DeliveryDistance, ExpiryDate, ImageContainer, PortraitContainer
} from '../../style/Card';
import defaultImage from '../../assets/images/default_pumpkin.jpg'
import defaultImageAuthor from '../../assets/images/default_farmer.jpg'
import { ReactComponent as PromoIcon} from '../../assets/icons/disc_2.svg';
import {cartAction} from "../../store/actions/cartAction";
import {useDispatch} from "react-redux";
import {ADD_TO_CART} from "../../helpers/constants";


const Card = ({product, changeIcon}) => {
    const dispatch = useDispatch();
    const [availableStock, setAvailableStock] = useState(product.stock)
    const [name, setName] = useState('First Lastname')
    const [productName, setProductName] = useState('Product Name')
    const [expirationDate, setExpirationDate] = useState('01.01.2021')
    const [image, setImage] = useState(defaultImage)
    const [imageAuthor, setImageAuthor] = useState(defaultImageAuthor)
    const [location, setLocation] = useState('Location')
    const [unit, setUnit] = useState('na')
    const [price, setPrice] = useState("0.00")

    // formatting backend information and handling the real time render of the "addproduct" page
    useEffect(() => {
        const unitFormatter = () => {
            if (product.units === 'kg') setUnit('Kg')
            if (product.units === 'piece') setUnit('pc.')
            if (product.image) setImage(product.image)
            if (product.author && product.author.profile_picture) setImageAuthor(product.author.profile_picture)
            if (product.author && product.author.first_name && product.author.last_name) setName(product.author.first_name + ' ' + product.author.last_name)
            if (product.name) setProductName(product.name)
            if (product.location) setLocation(product.location)
            if (product.price % 1) {setPrice(product.price)} else setPrice(product.price + '.00')
            if (product.expiration_date) setExpirationDate(product.expiration_date)
        }
        unitFormatter();
        return function cleanup() {};
    },[product])

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
                    <ImageContainer><Image src={image} /></ImageContainer>
                </TopContainer>
                <BottomContainer>
                    <UpperContainer>
                        <UpperLeftContainer>
                            <ProductName>{productName}</ProductName>
                            <Location>Garden @{location}</Location>
                            <DeliveryOptions>
                                <PickUpIcon>{changeIcon === 'pickup' ? (<i className="fas fa-hiking"></i>) : (<i className="fas fa-truck"></i>)}</PickUpIcon>
                                {product.deliver_within_radius && <DeliveryIcon><i className="fas fa-truck"></i></DeliveryIcon>}
                                {product.deliver_within_radius && <DeliveryDistance>up to {product.deliver_within_radius}km</DeliveryDistance>}
                            </DeliveryOptions>
                            <ExpiryDate>Ad expiration {expirationDate}</ExpiryDate>
                        </UpperLeftContainer>
                        <UpperRightContainer>
                            <SellerContainer>
                                <PortraitContainer><Portrait src={imageAuthor} /></PortraitContainer>
                                <SellerName>{name}</SellerName>
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
                            <PriceTag>{price}</PriceTag>
                            <Unit>/ {unit}</Unit>
                        </PriceContainer>
                    </LowerContainer>
                </BottomContainer>
            </CardContainer>
        </Fragment>
    )
}
export  default Card;