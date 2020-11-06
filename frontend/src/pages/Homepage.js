import React, {Fragment} from 'react';
import {TopContainer, Image, BottomConatiner, Box, HomeContainer, Text} from '../style/Homepage';
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
                <Text>
                   - Our Fresh Online Shop -
                </Text>
                <Box>
                    <Card />
                    <Card />
                    <Card />

                </Box>
                
            </BottomConatiner>
            </HomeContainer>

            <Footer />
        </Fragment>
    )
}

export default Homepage;