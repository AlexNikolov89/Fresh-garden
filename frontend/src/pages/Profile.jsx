import React, {Fragment, useEffect, useState} from 'react';
import {
    TopContainer, Image, HomeContainer, Slogan} from '../style/Homepage';
import {UserProfileContainer, AvatarContainer, Avatar, Name, ZipCode, Address, City, ButtonEdit, 
    BottomContainer, UserInfoContainer, AboutGarden, Title, Info, Email, Contact, Mobile} from '../style/Profile'
import Header from '../components/Header'
import Footer from '../components/Footer/index'
//import {Login} from "./Login";
import { useLocation } from "react-router-dom";
//import AvatarImg from '../assets/defaultRuth.PNG';
import Card from '../components/Card/index.js'
import {useDispatch} from "react-redux";
import {userAction} from "../store/actions/userAction";
import {connect} from 'react-redux';
import {Login} from "./Login";

const Profile = ({author}) => {
    const { first_name, last_name, email, description, phone, address, zip, city, avatar } = author
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchUser = async () => {
            await dispatch(userAction('users/me/', 'GET', 'GET_USER'));
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
                    {location.pathname === '/login' && <Login/>}
                    {location.pathname === '/profile' && <p>you habe profile! pliiiis</p>}
                    {/*<UserProfileContainer>*/}
                    {/*    <AvatarContainer>*/}
                    {/*        <Avatar src={avatar || 'https://via.placeholder.com/50x50'} alt='avatar' />*/}
                    {/*        <Name>{`${first_name} ${last_name}`}</Name>*/}
                    {/*        <Email>{email}</Email>*/}
                    {/*        <ButtonEdit>Edit Profile</ButtonEdit>*/}
                    {/*    </AvatarContainer>*/}
                    {/*    <UserInfoContainer>*/}

                    {/*    <Title>About my garden</Title>*/}
                    {/*        <AboutGarden>*/}
                    {/*        /!*Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br />*!/*/}
                    {/*        /!*sed diam nonumy eirmod tempor invidunt ut labore et dolore<br />*!/*/}
                    {/*        /!*magna aliquyam erat, sed diam voluptua. At vero eos et accusam et <br />*!/*/}
                    {/*            {description}*/}
                    {/*        </AboutGarden>*/}

                    {/*        <Title>Location</Title>*/}
                    {/*        <Info>*/}
                    {/*        <ZipCode>{zip}</ZipCode>*/}
                    {/*        <Address>{address}</Address>*/}
                    {/*        <City>{city}</City>*/}
                    {/*        </Info>*/}

                    {/*        <Title>Tel. Number</Title>*/}
                    {/*        <Contact>*/}
                    {/*            <Mobile>{phone}</Mobile>*/}
                    {/*        </Contact>*/}
                    {/*    </UserInfoContainer>*/}
                    {/*</UserProfileContainer>*/}

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
