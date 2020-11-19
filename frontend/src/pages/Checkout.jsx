import React, {Fragment} from 'react'
import Header from '../components/Header';
import {CheckoutConatiner, Text,
         MainContainer, BoxContainer, RightConatiner, SellerContainer, ButtonsContainer,
         TitleContainer, PaymentConatiner, Radio, DeleteIcon, RadioButton,
         Summary, TotalSum, SumConatiner, Bottom, LeftConatiner, Button, Submit } from '../style/Checkoutpage';
import Product from '../components/Product/index'
import Footer from '../components/Footer/index'
import {EmptyCartIcon} from "../style/ShoppingCart";
import Banner from "../components/Header/Banner";


const Checkout = () => {
    return (
        <Fragment >
            <div style={{
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9000,
                width: "100%",
                position: "absolute",
                height: "100%",
                top: 0,
                color: "black",
                textAlign: "center",
                textJustify: "center",
            }}><h1 style={{
                color: '#B7C892',
                fontSize: "64px",
            }}>ACT 2 - MEMBER EMMA</h1>
            {/*<Header />*/}
            {/*<CheckoutContainer>*/}

            {/*<ProductsConatiner>*/}
            {/*    <Text>-Your Order Items-</Text>*/}

            {/*    <BoxContainer>*/}

            {/*        /!*<TopHeaderConatiner>*/}
            {/*            <ProductT>Product</ProductT>*/}
            {/*            <QuantityT>Quantity</QuantityT>*/}
            {/*            <Total>Total</Total>*/}
            {/*        </TopHeaderConatiner>  *!/*/}
            {/*    <Wrapp>*/}
            {/*    <ProductWrap>*/}
            {/*        <Product />*/}
            {/*        <Product />*/}
            {/*        <Product />*/}
            {/*        <Product />*/}
            {/*    </ProductWrap>*/}

            {/*    <PaymentConatiner>*/}
            {/*    <SumConatiner>*/}
            {/*        <Summary>Summary</Summary>*/}
            {/*        <Subtotal>Subtotal: <span>CHF 38.00</span></Subtotal>*/}
            {/*        <Tax>Tax <span>FREE</span></Tax>*/}
            {/*        <Delivery>Delivery <span>CHF 6.50</span></Delivery>*/}
            {/*        */}
            {/*        <hr />*/}
            {/*        <TotalSum>Total: <span>CHF 44.50</span></TotalSum>*/}
            {/*    </SumConatiner>*/}

            {/*    <Submit>*/}
            {/*        <Button>Proceed to Pay</Button>*/}
            {/*    </Submit> */}

            {/*</PaymentConatiner>*/}
            {/*</Wrapp>*/}

            {/*    </BoxContainer>*/}

            {/*</ProductsConatiner>*/}
            {/*</CheckoutContainer>*/}
            {/*<Footer />*/}
            </div>
        </Fragment>
    )
}

export default Checkout;
