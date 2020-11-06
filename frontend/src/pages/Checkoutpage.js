import React, {Fragment} from 'react'
import Header from '../components/Header/index';
import {TopContainer, Image, Text} from '../style/Homepage';
import {CheckoutConatiner,
         ProductsConatiner, BoxContainer,
          Box, Tomato,
           Description, Info,
           Button, ProductQ, Quantity, QueantityT, Price, Total, TotalP, TotalQ } from '../style/Checkoutpage'
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
                
                    <Product />
                    {/*<Tomato src={TomatoImg} />
                    
                        <Info>
                            <Product>Product</Product>
                            <Description>Fresh Tomato from Thurgau</Description>
                        </Info>

                        <Quantity>
                            <QueantityT>Quantity</QueantityT>
                        
                            <TotalQ>
                                <Button><i class="fas fa-plus" /></Button>
                                <ProductQ>15</ProductQ>
                                <Button><i class="fas fa-minus" /></Button>
                            </TotalQ>
                            
                        </Quantity>

                        <TotalP>
                            <Price>Price</Price>
                            <Total>CHF 25</Total>
    </TotalP> */}</BoxContainer>
    
            </ProductsConatiner>

            </CheckoutConatiner>

        </Fragment>
    )
}

export default Checkoutpage;
