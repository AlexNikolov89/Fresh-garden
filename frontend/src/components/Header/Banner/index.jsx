import React, {Fragment} from 'react'
import {Image, Slogan, TopContainer} from "../../../style/Homepage";
import backgroundDefault from "../../../assets/images/fresh_hands.jpg";


const Banner = ({banner}) => {
    if (!banner) banner = backgroundDefault

    return (
        <Fragment>
            <TopContainer style={{backgroundImage: `url(${banner})`}}>
                <Image >
                    <Slogan>For People. By People.<br />Homegrown.<br />Earthy.</Slogan>
                </Image>
            </TopContainer>
        </Fragment>
    )
}

export default Banner;