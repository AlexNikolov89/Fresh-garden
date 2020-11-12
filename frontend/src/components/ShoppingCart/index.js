import React, {Fragment} from 'react';
import {
    ShoppingCartContainer, TopContainer, Title,
    MiddleContainer, BottomContainer, EmptyCart, CheckoutButton, EmptyCartIcon, TextField, Total,
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
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </MiddleContainer>

                <BottomContainer>
                    <Total>CHF 32.50</Total>
                    <EmptyCart>
                        <EmptyCartIcon><i className="fas fa-trash-alt" /></EmptyCartIcon>
                        <TextField>Empty Shopping Basket</TextField>
                    </EmptyCart>
                    <CheckoutButton to={'/checkout'}>Checkout</CheckoutButton>
                </BottomContainer>
            </ShoppingCartContainer>
        </Fragment>
    )
}

export default ShoppingCart;
