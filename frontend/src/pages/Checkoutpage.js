import React, {Fragment} from 'react'
import Header from '../components/Header/index';
import {TopContainer, Image, Text} from '../style/Homepage';
import {CheckoutConatiner,
         ProductsConatiner, BoxContainer, TopHeaderConatiner, ProductT, QuantityT, Total,
         HorizontalLine, PaymentConatiner,
         Summary, Subtotal,
         SumConatiner, Tax, Delivery, TotalSum, ButtonPay, Submit, TotalQ } from '../style/Checkoutpage'
import TomatoImg from '../assets/tomato.jpg';
import Product from '../components/Product/index'


const Checkoutpage = () => {
    return (
        <Fragment>

            <CheckoutConatiner>

            <TopContainer>
                <Image />
            </TopContainer>
                <Header />

            <ProductsConatiner>
                <Text>-Your Order Items-</Text>

                <BoxContainer>

                    <TopHeaderConatiner>
                        <ProductT>Product</ProductT>
                        <QuantityT>Quantity</QuantityT>
                        <Total>Total</Total>
                    </TopHeaderConatiner>
                
                    <Product />
                    <Product />

                </BoxContainer>
    
            </ProductsConatiner>

            <HorizontalLine />

            <PaymentConatiner>
                <SumConatiner>
                    <Summary>Summary</Summary>
                    <Subtotal>Subtotal: <span>CHF 38.00</span></Subtotal>
                    <Tax>Tax <span>FREE</span></Tax>
                    <Delivery>Delivery <span>CHF 6.50</span></Delivery>
                </SumConatiner>

                <Submit>
                    <TotalSum>Total: <span>CHF 44.50</span></TotalSum>
                    <ButtonPay>Proceed to pay</ButtonPay>
                </Submit>

            </PaymentConatiner>

            </CheckoutConatiner>

        </Fragment>
    )
}

export default Checkoutpage;
