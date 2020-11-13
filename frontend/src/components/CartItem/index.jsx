import React, {Fragment} from "react";
import defaultImage from "../../assets/eggplant.jpg";
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

const CartItem = ({item}) => {
    const priceSuffix = item.price % 1 ? '0' : '';
    console.log("in da CartItem, item ->", item)
    return(
        <Fragment>
            <ProductContainer>
                    <LeftContainer>
                        <ImageContainer>
                            <Image src={item.image ? item.image : defaultImage} />
                        </ImageContainer>
                        <DetailContainer>
                            <ProductName>{item.name ? item.name : "Default Auberschin"}</ProductName>
                            <QuantityContainer>
                                <Decrement><i className="fas fa-minus"></i></Decrement>
                                <Count>{item.quantity ? item.quantity : "0"}</Count>
                                <Increment><i className="fas fa-plus"></i></Increment>
                            </QuantityContainer>
                        </DetailContainer>
                    </LeftContainer>

                    <RightContainer>
                        <Delete><i className="fas fa-trash-alt"></i></Delete>
                        <Price>CHF {item.price ? item.price * item.quantity + priceSuffix : "6.80"}</Price>
                    </RightContainer>
                </ProductContainer>
        </Fragment>
    )
}

export default CartItem