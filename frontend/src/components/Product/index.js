import React, {Fragment} from 'react'
import {ProductContainer, Tomato, TomatoImg, Info, Description, ProductTitle,
       Quantity, Items, QueantityT, TotalQ, Button, ProductQ, TotatlP, Price, Total, Delete} from '../../style/Product.js'
import TomatoImage from '../../assets/tomato.jpg';
import {HeaderConatiner, QuantityT, ProductT, PriceT,
       InfoConatiner, Name, TotalPrice, ProductImg, BLock, ImageConatiner} from '../../style/Product'


const Product = () => {
    return (

        <Fragment>
            <ProductContainer>


            <ProductImg src={TomatoImage} />

                <InfoConatiner>
                
                    <Info>  
                        <Description>Fresh Tomato from Thurgau</Description>
                        <Items>Quantity: 5 Items</Items>

                    <Quantity>
                        <Button><i class="fas fa-chevron-left" /></Button>
                        <ProductQ>15</ProductQ>
                        <Button><i class="fas fa-chevron-right" /></Button>
                    </Quantity>
                    </Info>

                    <TotalPrice>
                        <Price>CHFXX</Price>
                        <i class="fas fa-trash-alt"></i>
                    </TotalPrice>

                </InfoConatiner>

            </ProductContainer>
        </Fragment>
    )
}

export default Product;
