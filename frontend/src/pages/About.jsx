import React, {Fragment} from 'react'
//import { About } from '../style/Homepage'
import Background from '../assets/images/casket.jpg'
import Header from '../components/Header/index.jsx'
import {AboutContainer, TopContainer, Image, Slogan, ImageContainer, BackgroundImg,
        BottomContainer, Title, Text, HorizontalLine, ImagesContainer, Image1,
        Image2, Image3} from '../style/About'
import ImageOne from '../assets/images/img-one.jpg';
import ImageTwo from '../assets/images/img-five.jpg';
import ImageThree from '../assets/images/img-two.jpg';

const About = () => {
    return (
        <Fragment>

            <AboutContainer>
                <TopContainer>
                    <Image>
                        {/*<Slogan>Welcome to our Fresh Garden</Slogan>  */}
                        <Slogan>Homegrown.<br />Earthy.<br />Fresh.</Slogan>
                    </Image>
                </TopContainer>

                <Header />

                <ImageContainer>
                    <BackgroundImg src={Background} />
                </ImageContainer>

                <BottomContainer>

                    <Title>"Welcome to our Fresh Garden"</Title>

                    <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt <br />
                          ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et 
                          ea rebum. Stet clita kasd gubergren, no sea takimata <br />sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <br />
                          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                         sit amet.
                    </Text>

                    <HorizontalLine />

                    <Title>What we offer</Title>

                    <ImagesContainer>
                        <Image1 src={ImageOne} />
                        <Image2 src={ImageTwo} />
                        <Image3 src={ImageThree} />
                    </ImagesContainer>

                    <Title>Our Terms and Options</Title>

                    <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt <br />
                          ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et 
                          ea rebum. Stet clita kasd gubergren, no sea takimata <br />sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <br />
                          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                         sit amet.
                    </Text>
                
                </BottomContainer>
            </AboutContainer>
        </Fragment>
    )
}

export  default About;
