import React, {Fragment} from 'react'
import {ProductContainer, Tomato, TomatoImg, Info, Description, ProductTitle,
       Quantity, Items, QueantityT, TotalQ, Increment, Decrement, Count, TotatlP, Price, Total, Delete} from '../../style/Product.js'
import TomatoImage from '../../assets/images/tomato.jpg';
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
                        <Increment><i className="fas fa-minus" /></Increment>
                        <Count>15</Count>
                        <Decrement><i className="fas fa-plus" /></Decrement>
                    </Quantity>
                    </Info>
                    <TotalPrice>
                        <Price>CHFXX</Price>
                        <Delete><i class="fas fa-trash-alt"></i></Delete>
                    </TotalPrice>
                </InfoConatiner>
            </ProductContainer>
        </Fragment>
    )
}
export default Product;