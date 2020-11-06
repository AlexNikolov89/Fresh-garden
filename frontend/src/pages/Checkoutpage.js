import React, {Fragment} from 'react'
import Header from '../components/Header/index';
import {TopContainer, Image, Text} from '../style/Homepage';
import {CheckoutConatiner,
         ProductsConatiner, BoxContainer, TopHeaderConatiner, ProductT, QuantityT, Total,
          Box, Tomato,
           Description, Info,
           Button, ProductQ, Quantity, QueantityT, Price, TotalP, TotalQ } from '../style/Checkoutpage'
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

                </BoxContainer>
    
            </ProductsConatiner>

            </CheckoutConatiner>

        </Fragment>
    )
}

export default Checkoutpage;
