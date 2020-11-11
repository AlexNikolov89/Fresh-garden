import React, {Fragment} from 'react';
import {
    Quantity, Calc, Top,
    Text, Image, ImageContainer,
    ProductInfo, Name, Button,
    Price, ButtonSubmit, HorizontalLine, Total, ShoppingCartContainer,
} from '../../style/ShoppingCart';
import Patato from '../../assets/patato.jpg'
import {NavLink} from 'react-router-dom'


const ShoppingCart = () => {

    return(
        <Fragment>
            <ShoppingCartContainer>
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

                <HorizontalLine />
                    <Total>CHF 50</Total>
                <HorizontalLine />
                    
                <NavLink to='/checkoutpage'>
                    <ButtonSubmit>Checkout</ButtonSubmit>
                </NavLink>
            </ShoppingCartContainer>
        </Fragment>
    )
}

export default ShoppingCart;