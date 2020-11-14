import React, {Fragment, useEffect, useState} from 'react';
import {
    TopContainer, Image, Box, HomeContainer, Text, HorizontalLine,
    About, AboutText, BottomContainer, Slogan, SideBox
} from '../style/Homepage';
import Header from '../components/Header'
import Footer from '../components/Footer/index'
import {Login} from "./Login";
import { useHistory, useLocation } from "react-router-dom";

const Profile = () => {
    const history = useHistory();
    const location = useLocation();

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
                  {location.pathname === '/login' && <Login/>}
                    {location.pathname === '/profile' && <p>you habe profile! pliiiis</p>}
                </BottomContainer>
            </HomeContainer>
            <Footer />
        </Fragment>
    )
}

export default Profile;