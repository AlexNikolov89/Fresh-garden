import React, {Fragment} from 'react'
import Header from '../components/Header/index.jsx'
import {
    AboutMainContainer,
    AleksandraContainer,
    AlexContainer,
    BottomHalveUpperContainer,
    BottomSubPart,
    BottomSubscriptionText, BugContainer, BugSubmitContainer, BugText, BugTextContainer,
    DevName,
    DevRole, DisclaimerContainer, DisclaimerText, DisclaimerTitle,
    FirstDiv,
    FirstLeftContainer,
    FirstRightContainer,
    FirstSectionContainer,
    GitHubLink,
    HeaderTitleContainer,
    Image,
    LinkedInLink, LowerProfileContainer,
    MeetTheTeamContainer,
    MeetTheTeamHeader,
    NameContainer, PersonalQuote,
    ProfileImage,
    ProfileImageContainer,
    SamiContainer,
    SecondDiv,
    SecondLeftContainer,
    SecondRightContainer,
    SocialLinks,
    SubscriptionButtonContainer,
    SubscriptionMainContainer,
    SubscriptionModelContainer,
    SubscriptionPlanOne,
    SubscriptionPlanThree,
    SubscriptionPlanTwo,
    SubscriptionPrice,
    SubscriptionTitle,
    TheDevTeam,
    ThirdDiv,
    ThirdLeftContainer,
    ThirdRightContainer,
    TopSubPart,
    TopSubscriptionText,
    UpperHalveBottomContainer,
    UpperHalveContainer,
    UpperProfileContainer
} from "../style/About";
import FreshGarden1 from '../assets/images/freshgarden1.jpg'
import FreshGarden2 from '../assets/images/freshgarden2.jpg'
import FreshGarden3 from '../assets/images/freshgarden3.jpg'
import Sami from '../assets/images/Sami.jpg'
import {BugFeedbackButton, SubscribeButton} from "../style/Buttons";
import Footer from "../components/Footer";


const About = () => {
    return (
        <Fragment>
                <Header />
                <AboutMainContainer>
                    <HeaderTitleContainer>About</HeaderTitleContainer>
                    <FirstSectionContainer>
                        <FirstDiv>
                            <FirstLeftContainer>What is freshgarden.ch?
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br/>
                                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.<br/>
                                consetetur sadipscing elitr, sed diam nonumy sed diam voluptua. At vero.
                                </p>
                            </FirstLeftContainer>
                            <FirstRightContainer><Image src={FreshGarden1} /></FirstRightContainer>
                        </FirstDiv>
                        <SecondDiv>
                            <SecondLeftContainer><Image src={FreshGarden2} /></SecondLeftContainer>
                            <SecondRightContainer>How do I trade goods?
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br/>
                                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.<br/>
                                consetetur sadipscing elitr, sed diam nonumy sed diam voluptua. At vero.
                                </p>
                            </SecondRightContainer>
                        </SecondDiv>
                        <ThirdDiv>
                            <ThirdLeftContainer>How do I pay the seller?
                                 <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br/>
                                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.<br/>
                                consetetur sadipscing elitr, sed diam nonumy sed diam voluptua. At vero.
                                </p>
                            </ThirdLeftContainer>
                            <ThirdRightContainer><Image src={FreshGarden3} /></ThirdRightContainer>
                        </ThirdDiv>
                    </FirstSectionContainer>

                    <SubscriptionMainContainer>
                        <TopSubscriptionText>Can I promote a product?
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore <br/>
                               Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum<br/>
                            </p>
                        </TopSubscriptionText>
                        <SubscriptionModelContainer>
                            <SubscriptionPlanOne>
                                <TopSubPart>
                                    <UpperHalveContainer>
                                        <SubscriptionTitle>BASIC</SubscriptionTitle>
                                    </UpperHalveContainer>
                                    <UpperHalveBottomContainer>
                                        <SubscriptionPrice>FREE</SubscriptionPrice>
                                    </UpperHalveBottomContainer>
                                </TopSubPart>
                                <BottomSubPart>
                                    <BottomHalveUpperContainer>
                                        <BottomSubscriptionText>
                                            <i className="fas fa-check-circle"></i>All Features<br/>
                                            <i className="fas fa-check-circle"></i>Chat Support<br/>
                                            <i className="fas fa-check-circle"></i>Free Server
                                        </BottomSubscriptionText>
                                    </BottomHalveUpperContainer>
                                    <SubscriptionButtonContainer>
                                        <SubscribeButton>SELECT</SubscribeButton>
                                    </SubscriptionButtonContainer>
                                </BottomSubPart>
                            </SubscriptionPlanOne>
                            <SubscriptionPlanTwo>
                                <TopSubPart>
                                    <UpperHalveContainer>
                                        <SubscriptionTitle>FRESHGARDEN</SubscriptionTitle>
                                    </UpperHalveContainer>
                                    <UpperHalveBottomContainer>
                                        <SubscriptionPrice>8.90 $</SubscriptionPrice>
                                    </UpperHalveBottomContainer>
                                </TopSubPart>
                                <BottomSubPart>
                                    <BottomHalveUpperContainer>
                                        <BottomSubscriptionText>
                                            <i className="fas fa-check-circle"></i>All Features<br/>
                                            <i className="fas fa-check-circle"></i>Chat Support<br/>
                                            <i className="fas fa-check-circle"></i>Free Server
                                        </BottomSubscriptionText>
                                    </BottomHalveUpperContainer>
                                    <SubscriptionButtonContainer>
                                        <SubscribeButton>SELECT</SubscribeButton>
                                    </SubscriptionButtonContainer>
                                </BottomSubPart>
                            </SubscriptionPlanTwo>
                            <SubscriptionPlanThree>
                                <TopSubPart>
                                    <UpperHalveContainer>
                                        <SubscriptionTitle>FRESHGARDEN+</SubscriptionTitle>
                                    </UpperHalveContainer>
                                    <UpperHalveBottomContainer>
                                        <SubscriptionPrice>14.90 $</SubscriptionPrice>
                                    </UpperHalveBottomContainer>
                                </TopSubPart>
                                <BottomSubPart>
                                    <BottomHalveUpperContainer>
                                        <BottomSubscriptionText>
                                            <i className="fas fa-check-circle"></i>All Features<br/>
                                            <i className="fas fa-check-circle"></i>Chat Support<br/>
                                            <i className="fas fa-check-circle"></i>Free Server
                                        </BottomSubscriptionText>
                                    </BottomHalveUpperContainer>
                                    <SubscriptionButtonContainer>
                                        <SubscribeButton>SELECT</SubscribeButton>
                                    </SubscriptionButtonContainer>
                                </BottomSubPart>
                            </SubscriptionPlanThree>
                        </SubscriptionModelContainer>
                    </SubscriptionMainContainer>


                    <MeetTheTeamContainer>
                        <MeetTheTeamHeader>Meet the DevTeam</MeetTheTeamHeader>
                            <TheDevTeam>
                                <AlexContainer>
                                    <UpperProfileContainer>
                                        <ProfileImageContainer>
                                            <ProfileImage src={Sami}></ProfileImage>
                                        </ProfileImageContainer>
                                        <NameContainer>
                                            <DevName>Sami Ben Ali</DevName>
                                            <DevRole>Project Role: Backend Developer</DevRole>
                                        </NameContainer>
                                    </UpperProfileContainer>
                                    <LowerProfileContainer>
                                        <PersonalQuote>"A wise man once said nothing."</PersonalQuote>
                                        <SocialLinks>
                                            <LinkedInLink target={'_blank'} href={'https://www.linkedin.com/in/sami-benali/'}><i className="fab fa-linkedin"></i></LinkedInLink>
                                            <GitHubLink target={'_blank'} href={'https://gitlab.propulsion-home.ch/samo'}><i className="fab fa-github-square"></i></GitHubLink>
                                        </SocialLinks>
                                    </LowerProfileContainer>
                                </AlexContainer>
                                <AleksandraContainer>
                                    <UpperProfileContainer>
                                        <ProfileImageContainer>
                                            <ProfileImage src={Sami}></ProfileImage>
                                        </ProfileImageContainer>
                                        <NameContainer>
                                            <DevName>Sami Ben Ali</DevName>
                                            <DevRole>Project Role: Backend Developer</DevRole>
                                        </NameContainer>
                                    </UpperProfileContainer>
                                    <LowerProfileContainer>
                                        <PersonalQuote>"A wise man once said nothing."</PersonalQuote>
                                        <SocialLinks>
                                            <LinkedInLink target={'_blank'} href={'https://www.linkedin.com/in/sami-benali/'}><i className="fab fa-linkedin"></i></LinkedInLink>
                                            <GitHubLink target={'_blank'} href={'https://gitlab.propulsion-home.ch/samo'}><i className="fab fa-github-square"></i></GitHubLink>
                                        </SocialLinks>
                                    </LowerProfileContainer>
                                </AleksandraContainer>
                                <SamiContainer>
                                    <UpperProfileContainer>
                                        <ProfileImageContainer>
                                            <ProfileImage src={Sami}></ProfileImage>
                                        </ProfileImageContainer>
                                        <NameContainer>
                                            <DevName>Sami Ben Ali</DevName>
                                            <DevRole>Project Role: Backend Developer</DevRole>
                                        </NameContainer>
                                    </UpperProfileContainer>
                                    <LowerProfileContainer>
                                        <PersonalQuote>"A wise man once said nothing."</PersonalQuote>
                                        <SocialLinks>
                                            <LinkedInLink target={'_blank'} href={'https://www.linkedin.com/in/sami-benali/'}><i className="fab fa-linkedin"></i></LinkedInLink>
                                            <GitHubLink target={'_blank'} href={'https://gitlab.propulsion-home.ch/samo'}><i className="fab fa-github-square"></i></GitHubLink>
                                        </SocialLinks>
                                    </LowerProfileContainer>
                                </SamiContainer>
                            </TheDevTeam>
                        </MeetTheTeamContainer>


                    <BugContainer>
                        <BugTextContainer>
                            <BugText>Some Bugs are welcomed but please report the ones on this page.</BugText>
                        </BugTextContainer>
                        <BugSubmitContainer>
                            <BugFeedbackButton><i className="fas fa-bug"></i>Give Feedback</BugFeedbackButton>
                        </BugSubmitContainer>
                    </BugContainer>

                    <DisclaimerContainer>
                        <DisclaimerTitle>Legal Disclaimer</DisclaimerTitle>
                        <DisclaimerText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod temporn vidunt ut labore et dolore magna<br/>
                        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren duo dolores.<br/>
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.<br/>
                        sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                        </DisclaimerText>
                    </DisclaimerContainer>
                </AboutMainContainer>
            <Footer/>
        </Fragment>
    )
}

export  default About;
