import React, {Fragment} from "react";
import defaultImage from "../../assets/demo/eggplant.jpg";
import {
    Count,
    Decrement, Delete,
    DetailContainer,
    Image,
    ImageContainer, Increment,
    LeftContainer, Price,
    ProductContainer,
    ProductName, QuantityContainer, RightContainer
} from "../../style/ShoppingCart";
import kopfsalat from '../../assets/salad.png'

const CartItem = ({item}) => {
    const priceSuffix = item.price % 1 ? '0' : '';
    return(
        <Fragment>
            <ProductContainer>
                    <LeftContainer>
                        <ImageContainer>
                            <Image src={item.image ? item.image : kopfsalat} />
                        </ImageContainer>
                        <DetailContainer>
                            <ProductName>{item.name ? item.name : "Kopfsalat"}</ProductName>
                            <QuantityContainer>
                                <Decrement><i className="fas fa-minus"/></Decrement>
                                <Count>{item.quantity ? item.quantity : "1"}</Count>
                                <Increment><i className="fas fa-plus"/></Increment>
                            </QuantityContainer>
                        </DetailContainer>
                    </LeftContainer>

                    <RightContainer>
                        <Delete><i className="fas fa-trash-alt"/></Delete>
                        <Price>CHF {item.price ? item.price * item.quantity + priceSuffix : "6.80"}</Price>
                    </RightContainer>
                </ProductContainer>
        </Fragment>
    )
}

export default CartItem