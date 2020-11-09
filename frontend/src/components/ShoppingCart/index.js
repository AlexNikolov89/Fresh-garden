import React, {Fragment} from 'react';
import {ShoppingCartConatiner,
         Quantity, Calc, Top,
          Text, Image, ImageContainer,
           ProductInfo, Name, Button,
            Price, ButtonSubmit, HorizontalLine, Total,} from '../../style/ShoppingCart';
import Patato from '../../assets/patato.jpg'
import {Link, NavLink} from 'react-router-dom'



const ShoppingCart = () => {

    

    return(
        <Fragment>
            <ShoppingCartConatiner>
                <Top>
                    <Text>Items in your bag</Text>
                </Top>

                    <ImageContainer>
                        <Image src={Patato} />

                    <ProductInfo>
                        <Name>Patato</Name>

                        <Calc>
                            <i class="fas fa-plus-square" />
                            <Quantity>15</Quantity>
                            <i class="fas fa-minus-square" />
                        </Calc>
                        
                    </ProductInfo>
                    <Price>CHF 30</Price>
                </ImageContainer>



                <ImageContainer>
                        <Image src={Patato} />

                    <ProductInfo>
                        <Name>Patato</Name>

                        <Calc>
                            <i class="fas fa-plus-square" />
                            <Quantity>15</Quantity>
                            <i class="fas fa-minus-square" />
                        </Calc>
                        
                    </ProductInfo>
                    <Price>CHF 30</Price>
                </ImageContainer>


                <ImageContainer>
                        <Image src={Patato} />

                    <ProductInfo>
                        <Name>Patato</Name>

                        <Calc>
                            <i class="fas fa-plus-square" />
                            <Quantity>15</Quantity>
                            <i class="fas fa-plus-square" />
                        </Calc>
                        
                    </ProductInfo>
                    <Price>CHF 30</Price>
                </ImageContainer>

                <HorizontalLine />
                    <Total>CHF 50</Total>
                <HorizontalLine />
                    
                <NavLink to='/checkoutpage'>
                    <ButtonSubmit>Checkout</ButtonSubmit>
                </NavLink>
                    
            </ShoppingCartConatiner>
        </Fragment>
    )
}

export default ShoppingCart;