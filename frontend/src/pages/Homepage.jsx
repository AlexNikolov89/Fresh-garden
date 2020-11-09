import React, {Fragment, useEffect, useState} from 'react';
import {
    TopContainer, Image, Box, HomeContainer, Text, HorizontalLine,
    About, AboutText, BottomContainer, Slogan
} from '../style/Homepage';
import Header from '../components/Header'
import Footer from '../components/Footer/index'
import Card from '../components/Card/index';
import {screenSizeBreakPoint} from "../helpers/constants";
import useSticky from "../hooks/useSticky";

const Homepage = () => {
    const { isSticky, element } = useSticky()
    const [windowWidth, setWindowWidth] = useState('');

    const handleResize = e => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
        console.log(windowWidth);
    });

    return (
        <Fragment>

            <HomeContainer>
                <TopContainer>
                    <Image>
                        <Slogan>Homegrown. Fresh. Earthy.</Slogan>
                    </Image>
                </TopContainer>

                <Header />

                <BottomContainer>
                    <Box>
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
                </BottomContainer>

            </HomeContainer>

            <Footer />
        </Fragment>
    )
}

export default Homepage;