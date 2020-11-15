import React, {Fragment, useEffect, useState} from 'react';
import {
    TopContainer, Image, Box, HomeContainer, Text, HorizontalLine,
    About, AboutText, Slogan, SideBox
} from '../style/Homepage';
import {UserProfileContainer, AvatarContainer, Avatar, Name, ZipCode, Address, City, ButtonEdit, 
    BottomContainer, UserInfoContainer, AboutGarden, Title, Info, Email, Contact, Mobile} from '../style/Profile'
import Header from '../components/Header'
import Footer from '../components/Footer/index'
import {Login} from "./Login";
import { useHistory, useLocation } from "react-router-dom";
import AvatarImg from '../assets/defaultRuth.PNG';
import Card from '../components/Card/index.js'
import {useDispatch, useSelector} from "react-redux";
import {userAction} from "../store/actions/userAction";

const Profile = () => {

    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUser = async () => {
            await dispatch(userAction('users/me/', 'GET', 'GET_USER'));
            setIsLoading(false);
        }
        fetchUser()

    }, [dispatch]);

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
                  {/*{location.pathname === '/login' && <Login/>}*/}
                  {/*  {location.pathname === '/profile' && <p>you habe profile! pliiiis</p>}*/}
                    <UserProfileContainer>
                        <AvatarContainer>
                            <Avatar src={AvatarImg} alt='avatar' />
                            <Name>Name Lastname</Name>
                            <Email>some_name@gmail.com</Email>
                            <ButtonEdit>Edit Profile</ButtonEdit>
                        </AvatarContainer>
                        <UserInfoContainer>

                        <Title>About my garden</Title>
                            <AboutGarden>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br />
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore<br />
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et <br />
                            </AboutGarden>

                            <Title>Location</Title>
                            <Info>
                            <ZipCode>8400</ZipCode>
                            <Address>Bahnhofstrasse 1</Address>
                            <City>Zurich</City>
                            </Info>

                            <Title>Tel. Number</Title>
                            <Contact>
                                <Mobile>079 555 333 22</Mobile>
                            </Contact>
                        </UserInfoContainer>
                    </UserProfileContainer>

                </BottomContainer>

                <div>
                     {/*{products.map((product) =>*/}
                     {/*    <Card product={product} key={product.id}/>*/}
                     {/*    )}*/}
                </div>
            </HomeContainer>
            <Footer />
        </Fragment>
    )
}

export default Profile;