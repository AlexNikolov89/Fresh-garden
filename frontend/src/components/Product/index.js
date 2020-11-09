import React, {Fragment} from 'react'
import {ProductConatiner, Tomato, TomatoImg, Info, Description, ProductTitle,
       Quantity, QueantityT, TotalQ, Button, ProductQ, TotatlP, Price, Total, Delete} from '../../style/Product.js'
import TomatoImage from '../../assets/tomato.jpg';
import {HeaderConatiner, QuantityT, ProductT, PriceT,
       InfoConatiner, Name, TotalPrice, ProductImg, BLock, ImageConatiner} from '../../style/Product'


const Product = () => {
    return (

        <Fragment>
            <ProductConatiner>

            <ProductImg src={TomatoImage} />

                <InfoConatiner>
                
                    <Info>
                        
                        <Description>Fresh Tomato from Thurgau</Description>
                    </Info>

                    <Quantity>
                        <Button><i class="fas fa-chevron-left" /></Button>
                        <ProductQ>15</ProductQ>
                        <Button><i class="fas fa-chevron-right" /></Button>
                    </Quantity>

                    <TotalPrice>
                        <Price>CHF 30</Price>
                        <i class="fas fa-trash-alt"></i>
                    </TotalPrice>

                </InfoConatiner>

            </ProductConatiner>
        </Fragment>
    )
}

export default Product;
