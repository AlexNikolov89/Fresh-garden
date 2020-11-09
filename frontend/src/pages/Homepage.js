import React, {Fragment} from 'react';
import {TopContainer, Image, BottomConatiner, Box, HomeContainer} from '../style/Home';
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'
import Card from '../components/Card/index';

const Homepage = () => {
    return (
        <Fragment>

            <HomeContainer>
            <TopContainer>
                <Image />
            </TopContainer>

            <Header />

            <BottomConatiner>
                
                    <Card />
                    <Card />
                    <Card />
                
            </BottomConatiner>
            </HomeContainer>

            <Footer />
        </Fragment>
    )
}

export default Homepage;