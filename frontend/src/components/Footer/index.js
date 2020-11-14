import React, {Fragment} from 'react'
import {
    FooterContainer, GithubLink,
    LeftContainer, LinkedInLink,
    RightContainer,
    SocialIcons,
    SwissMade, SwissMadeLink,
    Text, TwitterLink,
} from '../../style/Footer'

const Footer = () => {
    return (
        <Fragment>
            <FooterContainer>
                <LeftContainer>
                    <Text>© 2020 Copyright fresh-food.ch, Ipsum.</Text>
                </LeftContainer>
                <RightContainer>
                    <SwissMade>
                        <SwissMadeLink target={'_blank'} href={'https://www.swissmadesoftware.org/'}>
                            <i className="fas fa-folder-plus"></i>
                        </SwissMadeLink>
                    </SwissMade>
                    <SocialIcons>
                        <GithubLink target={'_blank'} href={'https://github.com/'}><i className="fab fa-github-square"></i></GithubLink>
                        <LinkedInLink target={'_blank'} href={'https://www.linkedin.com/'}><i className="fab fa-linkedin"></i></LinkedInLink>
                        <TwitterLink target={'_blank'} href={'https://twitter.com/'}><i className="fab fa-twitter-square"></i></TwitterLink>
                    </SocialIcons>
                </RightContainer>
            </FooterContainer>
        </Fragment>
    )
}

export default Footer;
