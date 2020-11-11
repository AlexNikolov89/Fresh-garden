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

const CartItem = () => {

    return(
        <Fragment>
            <ProductContainer>
                    <LeftContainer>
                        <ImageContainer>
                            <Image src={defaultImage} />
                        </ImageContainer>
                        <DetailContainer>
                            <ProductName>Auberschin</ProductName>
                            <QuantityContainer>
                                <Decrement><i className="fas fa-minus"></i></Decrement>
                                <Count>7</Count>
                                <Increment><i className="fas fa-plus"></i></Increment>
                            </QuantityContainer>
                        </DetailContainer>
                    </LeftContainer>

                    <RightContainer>
                        <Delete><i className="fas fa-trash-alt"></i></Delete>
                        <Price>CHF 6.50</Price>
                    </RightContainer>
                </ProductContainer>
        </Fragment>
    )
}

export default CartItem