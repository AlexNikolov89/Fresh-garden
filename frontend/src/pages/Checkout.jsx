import React, {Fragment} from 'react'
import Header from '../components/Header';
import {TopContainer, Image} from '../style/Homepage';
import {CheckoutConatiner, Text,
         MainContainer, BoxContainer, RightConatiner, SellerContainer, ButtonsContainer, TopHeaderConatiner, ProductT, QuantityT, Total,
         TitleContainer, PaymentConatiner, Radio, DeleteIcon, RadioButton,
         Summary, Subtotal, TotalSum, SumConatiner, Bottom, Delivery, LeftConatiner, Button, Submit, TotalQ } from '../style/Checkoutpage';
import Product from '../components/Product/index'
import Footer from '../components/Footer/index'
import {EmptyCartIcon} from "../style/ShoppingCart";


const Checkout = () => {
    return (
        <Fragment>

            <CheckoutConatiner>

            <TopContainer>
                <Image />
            </TopContainer>
                <Header />

            <MainContainer>
                <TitleContainer>
                     <Text>Checkout</Text>
                </TitleContainer>


                <BoxContainer>

                    {/*<TopHeaderConatiner>
                        <ProductT>Product</ProductT>
                        <QuantityT>Quantity</QuantityT>
                        <Total>Total</Total>
                    </TopHeaderConatiner>  */}

                <LeftConatiner>
                    <Product />
                </LeftConatiner>

               <RightConatiner>
                    <PaymentConatiner>
                    <SumConatiner>
                        <Summary>Summary</Summary>

                        <SellerContainer>
                            {/*<div>*/}
                            {/*    <h2>Name</h2>*/}
                            {/*</div>*/}
                            {/*<div>*/}
                            {/*    <h2>CHF</h2>*/}
                            {/*</div>*/}

                            <h2>Name</h2>

                            {/*<SellerName></SellerName>*/}
                        </SellerContainer>

                        <hr />


                            <TotalSum>Total: <span>CHF 44.50</span></TotalSum>
                        <Bottom>
                        <ButtonsContainer>

                            <RadioButton>
                            <Radio type='radio' /><i className="fas fa-hand-holding-usd" />
                            </RadioButton>

                            <RadioButton>
                            <Radio type='radio' /><i className="fas fa-credit-card" />
                            </RadioButton>

                            <DeleteIcon><i className="fas fa-trash-alt" /></DeleteIcon>
                            </ButtonsContainer>

                            </Bottom>
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
