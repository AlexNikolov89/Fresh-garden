import React, {Fragment} from 'react'
import Header from '../components/Header/index.jsx'
import {
    AboutMainContainer,
    AleksandraContainer,
    AlexContainer,
    FirstDiv,
    FirstLeftContainer,
    FirstRightContainer,
    GitHubLink,
    HeaderAboutContainer,
    Image,
    LeftProfileContainer,
    LinkedInLink,
    MeetTheTeamContainer,
    MeetTheTeamHeader,
    ProfileImage,
    RightProfileContainer,
    SamiContainer,
    SecondDiv,
    SecondLeftContainer,
    SecondRightContainer,
    SocialLinks,
    SubscriptionMainContainer,
    SubscriptionModelContainer,
    SubscriptionPlanOne,
    SubscriptionPlanThree,
    SubscriptionPlanTwo,
    TheDevTeam,
    ThirdDiv,
    ThirdLeftContainer,
    ThirdRightContainer,
    TopSubscriptionText
} from "../style/About";
import FreshGarden1 from '../assets/images/freshgarden1.jpg'
import FreshGarden2 from '../assets/images/freshgarden2.jpg'
import FreshGarden3 from '../assets/images/freshgarden3.jpg'
import Sami from '../assets/images/Sami.jpg'


const About = () => {
    return (
        <Fragment>
                <Header />
                <AboutMainContainer>
                    <HeaderAboutContainer>About</HeaderAboutContainer>
                    <FirstDiv>
                        <FirstLeftContainer>What is freshgarden.ch?
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore <br/>
                            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.<br/>
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum<br/> dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                        </FirstLeftContainer>
                        <FirstRightContainer><Image src={FreshGarden1} /></FirstRightContainer>
                    </FirstDiv>
                    <SecondDiv>
                        <SecondLeftContainer><Image src={FreshGarden2} /></SecondLeftContainer>
                        <SecondRightContainer>How do I trade goods?
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore <br/>
                            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.<br/>
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum<br/> dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                        </SecondRightContainer>
                    </SecondDiv>
                    <ThirdDiv>
                        <ThirdLeftContainer>How do I pay the seller?
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore <br/>
                            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.<br/>
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum<br/> dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                        </ThirdLeftContainer>
                        <ThirdRightContainer><Image src={FreshGarden3} /></ThirdRightContainer>
                    </ThirdDiv>
                    <SubscriptionMainContainer>
                        <TopSubscriptionText>Can I promote a product?
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore <br/>
                               Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum<br/>
                            </p>
                        </TopSubscriptionText>
                        <SubscriptionModelContainer>
                            <SubscriptionPlanOne></SubscriptionPlanOne>
                            <SubscriptionPlanTwo></SubscriptionPlanTwo>
                            <SubscriptionPlanThree></SubscriptionPlanThree>
                        </SubscriptionModelContainer>
                    </SubscriptionMainContainer>
                    <MeetTheTeamContainer>
                        <MeetTheTeamHeader>Meet the DevTeam</MeetTheTeamHeader>
                            <TheDevTeam>
                                <AlexContainer>
                                    <LeftProfileContainer>
                                        <ProfileImage src={Sami}></ProfileImage>
                                        <h2>Sami Ben Ali</h2>
                                        <p>Zürich, Switzerland</p>
                                    </LeftProfileContainer>
                                    <RightProfileContainer>
                                        <h4>Project Role</h4><p>Backend Developer</p>
                                        <h4>Project Quote</h4><p>"To easy to be true gg ez"</p>
                                        <h4>Social</h4>
                                        <SocialLinks>
                                            <LinkedInLink target={'_blank'} href={'https://www.linkedin.com/in/sami-benali/'}><i className="fab fa-linkedin"></i></LinkedInLink>
                                            <GitHubLink target={'_blank'} href={'https://gitlab.propulsion-home.ch/samo'}><i className="fab fa-github-square"></i></GitHubLink>
                                        </SocialLinks>
                                    </RightProfileContainer>
                                </AlexContainer>
                                <AleksandraContainer>
                                    <LeftProfileContainer>
                                        <ProfileImage src={Sami}></ProfileImage>
                                        <h2>Sami Ben Ali</h2>
                                        <p>Zürich, Switzerland</p>
                                    </LeftProfileContainer>
                                    <RightProfileContainer>
                                        <h4>Project Role</h4><p>Backend Developer</p>
                                        <h4>Project Quote</h4><p>"To easy to be true gg ez"</p>
                                        <h4>Social</h4>
                                        <SocialLinks>
                                            <LinkedInLink target={'_blank'} href={'https://www.linkedin.com/in/sami-benali/'}><i className="fab fa-linkedin"></i></LinkedInLink>
                                            <GitHubLink target={'_blank'} href={'https://gitlab.propulsion-home.ch/samo'}><i className="fab fa-github-square"></i></GitHubLink>
                                        </SocialLinks>
                                    </RightProfileContainer>
                                </AleksandraContainer>
                                <SamiContainer>
                                    <LeftProfileContainer>
                                        <ProfileImage src={Sami}></ProfileImage>
                                        <h2>Sami Ben Ali</h2>
                                        <p>Zürich, Switzerland</p>
                                    </LeftProfileContainer>
                                    <RightProfileContainer>
                                            <h4>Project Role</h4><p>Backend Developer</p>
                                        <h4>Project Quote</h4><p>"To easy to be true gg ez"</p>
                                        <h4>Social</h4>
                                        <SocialLinks>
                                            <LinkedInLink target={'_blank'} href={'https://www.linkedin.com/in/sami-benali/'}><i className="fab fa-linkedin"></i></LinkedInLink>
                                            <GitHubLink target={'_blank'} href={'https://gitlab.propulsion-home.ch/samo'}><i className="fab fa-github-square"></i></GitHubLink>
                                        </SocialLinks>
                                    </RightProfileContainer>
                                </SamiContainer>
                            </TheDevTeam>
                        </MeetTheTeamContainer>
                </AboutMainContainer>
        </Fragment>
    )
}

export  default About;
