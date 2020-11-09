import React, {Fragment} from 'react';
import {
    TopContainer, Image, Box, HomeContainer, Text, HorizontalLine,
    About, AboutText, BottomContainer
} from '../style/Homepage';
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

                <BottomContainer>
                    <Text>
                       - Welcome to Our Fresh Online Shop -
                    </Text>
                    <About>
                        <AboutText>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor est Lorem <br />
                         et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et  <br />
                          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus..   <br />
                        </AboutText>
                    </About>
                    <HorizontalLine />
                    <Box>
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