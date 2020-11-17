import React, {Fragment} from 'react'
import Header from '../components/Header';
import {TopContainer, Image, Text} from '../style/Homepage';
import {CheckoutConatiner,
         MainContainer, BoxContainer, RightConatiner, SellerContainer, ButtonsContainer, TopHeaderConatiner, ProductT, QuantityT, Total,
         HorizontalLine, PaymentConatiner, Radio,
         Summary, Subtotal, TotalSum, SumConatiner, Tax, Delivery, LeftConatiner, Button, Submit, TotalQ } from '../style/Checkoutpage';
import Product from '../components/Product/index'
import Footer from '../components/Footer/index'


const Checkout = () => {
    return (
        <Fragment>

            <CheckoutConatiner>

            <TopContainer>
                <Image />
            </TopContainer>
                <Header />

            <MainContainer>
                <Text>Checkout</Text>

                <BoxContainer>

                    {/*<TopHeaderConatiner>
                        <ProductT>Product</ProductT>
                        <QuantityT>Quantity</QuantityT>
                        <Total>Total</Total>
                    </TopHeaderConatiner>  */}

                <LeftConatiner>
                    <Product />
                    <Product />
                    <Product />
                </LeftConatiner>

               <RightConatiner>
                    <PaymentConatiner>
                    <SumConatiner>
                        <Summary>Summary</Summary>

                        <SellerContainer>
                            {/*<SellerName></SellerName>*/}
                        </SellerContainer>

                        <hr />

                            <TotalSum>Total: <span>CHF 44.50</span></TotalSum>

                        <ButtonsContainer>
                            <div>
                            <Radio type='radio' /><i className="fas fa-hand-holding-usd" />
                            </div>
                            <div>
                            <Radio type='radio' /><i className="fas fa-credit-card" />
                            </div>
                            <div>
                            <Radio type='radio' />Fresh Token
                            </div>
                            </ButtonsContainer>

                        <Submit>
                            <Button>Pay</Button>
                        </Submit>

                    </SumConatiner>



               </PaymentConatiner>
                </RightConatiner>
                </BoxContainer>
    
            </MainContainer>

            </CheckoutConatiner>
            <Footer />
        </Fragment>
    )
}

export default Checkout;
