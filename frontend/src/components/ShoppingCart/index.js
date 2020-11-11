import React, {Fragment} from 'react';
import {
    ShoppingCartContainer, TopContainer, Title,
    MiddleContainer, BottomContainer, EmptyCart, CheckoutButton,
} from '../../style/ShoppingCart';
import CartItem from "../CartItem";


const ShoppingCart = () => {

    return(
        <Fragment>
            <ShoppingCartContainer>
                <TopContainer>
                    <Title>Basket</Title>
                </TopContainer>

                <MiddleContainer>
                    <CartItem />
                </MiddleContainer>

                <BottomContainer>
                    <EmptyCart><i className="fas fa-trash-alt"></i>Empty Shopping Basket</EmptyCart>
                    <CheckoutButton to={'/checkout'}>Checkout</CheckoutButton>
                </BottomContainer>
            </ShoppingCartContainer>
        </Fragment>
    )
}

export default ShoppingCart;
