import React, {Fragment, useEffect, useState} from 'react';
import {
    TopContainer, Image, Box, HomeContainer, Text, HorizontalLine,
    About, AboutText, BottomContainer, Slogan, SideBox
} from '../style/Homepage';
import Header from '../components/Header'
import Footer from '../components/Footer/index'
import Card from '../components/Card/index';
import ShoppingCart from "../components/ShoppingCart";
import PromotedProducts from "../components/PromotedProducts";
import {useSelector} from "react-redux";

const Homepage = () => {
    const viewCart = useSelector(state => state.cartReducer.viewCart);
    // const products = useSelector(state => state.productsReducer.allProducts);

    return (
        <Fragment>
            <HomeContainer>
                <TopContainer>
                    <Image>
                        <Slogan>Homegrown.<br />Earthy.<br />Fresh.</Slogan>
                    </Image>
                </TopContainer>

                <Header />

                <BottomContainer>
                    <Box>
                        {/*{products.map((product) => <Card product={product} />)}*/}
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </Box>
                    <SideBox>
                        {viewCart && <ShoppingCart />}
                        <PromotedProducts />
                    </SideBox>
                </BottomContainer>
            </HomeContainer>
            <Footer />
        </Fragment>
    )
}

export default Homepage;