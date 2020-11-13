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
    const cartTotal = useSelector(state => state.cartReducer.cartTotal);
    const dispatch = useDispatch();
    const history = useHistory();
    const priceSuffix = cartTotal % 1 === 0 ? '' : '0';
    console.log("in da ShoppingCart, cart ->", cart)

    useEffect(() => {
        const fetchCart = async () => {
            await dispatch(cartAction('cart/cart-detail/', 'GET', SET_CART));
        }
        fetchCart()
        return function cleanup() {};
    }, [dispatch]);

    // const cartItems = () => {
    //     for (const item in cart) {
    //         return <CartItem item={item} key={cart[item].id}/>
    //     }
    // }

    return(
        <Fragment>
            <ShoppingCartContainer>
                <TopContainer>
                    <Title>Basket</Title>
                </TopContainer>

                <MiddleContainer>
                    {/*{Object.keys(cart).map(item => <CartItem item={item} key={item.product_id} />)}*/}
                    {/*{cart.map(item => <CartItem item={item} key={item.product_id} />)}*/}
                    {/*{cartItems}*/}
                </MiddleContainer>

                <BottomContainer>
                    <Total>CHF {cartTotal ? cartTotal + priceSuffix : "0.00"}</Total>
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
