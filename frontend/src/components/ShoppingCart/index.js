import React, {Fragment, useEffect} from 'react';
import {
    ShoppingCartContainer, TopContainer, Title,
    MiddleContainer, BottomContainer, EmptyCart, CheckoutButton, EmptyCartIcon, TextField, Total,
} from '../../style/ShoppingCart';
import CartItem from "../CartItem";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {SET_CART} from "../../helpers/constants";
import {cartAction} from "../../store/actions/cartAction";


const ShoppingCart = () => {
    const cart = useSelector(state => state.cartReducer.cartDetails);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const fetchCart = async () => {
            await dispatch(cartAction('cart/cart-detail/', 'GET', SET_CART));
        }
        fetchCart()
        return function cleanup() {};
    }, [dispatch]);

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
