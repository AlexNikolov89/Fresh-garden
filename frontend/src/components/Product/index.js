import React, {Fragment} from 'react'
import {ProductConatiner, Tomato, TomatoImg, Info, Description,
        Quantity, QueantityT, TotalQ, Button, ProductQ, TotatlP, Price, Total} from '../../style/Product.js'
import TomatoImage from '../../assets/tomato.jpg';


const Product = () => {
    return (

        <Fragment>
            <ProductConatiner>

                <Tomato src={TomatoImage} />
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

                    <TotatlP>
                        <Price>Price</Price>
                        <Total>CHF 25</Total>
                    </TotatlP>

            </ProductConatiner>
        </Fragment>
    )
}

export default Product;
