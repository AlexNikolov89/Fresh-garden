import React, {Fragment, useEffect, useState} from 'react';
import {
    TopContainer, Image, HomeContainer, Slogan} from '../style/Homepage';
import {TitleContainer, UserProfileContainer, AvatarContainer, Avatar, Name, ZipCode, Address, City, ButtonEdit,
    BottomContainer, CardContainer, UserInfoContainer, AboutGarden, MainTitle, Title, Info, Email, Contact, Mobile, LogOut} from '../style/Profile'
import Header from '../components/Header'
import Footer from '../components/Footer/index'
//import {Login} from "./Login";
import { useLocation } from "react-router-dom";
import defaultAvatar from '../assets/defaultRuth.PNG';
import Card from '../components/Card/index.js'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'
import {userAction} from "../store/actions/userAction";
import {connect} from 'react-redux';
import Banner from "../components/Header/Banner";

const Profile = ({author}) => {
    //const { pathname } = useLocation();
    const user = useSelector(state => state.userProfileReducer.author)
    const dispatch = useDispatch();
    const history = useHistory();
    const [location, setLocation] = useState('')
    const [firstName, setFirstName] = useState('Jane');
    const [lastName, setLastName] = useState('Doe');
    const [email, setEmail] = useState('jane@gmail.com');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [avatar, setAvatar] = useState(defaultAvatar);
    const [zip, setZip] = useState('');

    useEffect(() => {

        const fetchUser = async () => {
            await dispatch(userAction('users/me/', 'GET', 'GET_USER'));
        }
        fetchUser()

    }, [dispatch]);

    useEffect(() => {
        const userInfo = () => {
            if(user.location) setLocation(user.location);
            if(user.zip) setLocation(user.location);
        }
        userInfo()
    })

    const logout = () => {
       localStorage.removeItem('token');
       history.push('/user/login')
    }

    // useEffect(() => {
    //     const updateUserData = async () => {
    //         await  dispatch(userAction('users/me/', 'PATCH', 'UPDATE_USER_DATA'))
    //     }
    //     updateUserData();
    // }, [dispatch])

    return (
        <Fragment>
            <HomeContainer>
                <Banner/>

                <Header />

                    <TitleContainer>
                         <MainTitle>Profile</MainTitle>
                        <LogOut onClick={logout}>Logout</LogOut>
                     </TitleContainer>

                <BottomContainer>
                    <UserProfileContainer>
                        <AvatarContainer>
                            <Avatar src={avatar} alt='avatar' />
                            <Name>{`${firstName} ${lastName}`}</Name>
                            <Email>{email}</Email>
                            <ButtonEdit>Edit Profile</ButtonEdit>
                        </AvatarContainer>
                        <UserInfoContainer>

                        <Title>About me and my garden</Title>
                            <AboutGarden>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br />
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore<br />
                                {description}
                            </AboutGarden>


                            {/*{location && <Title>My Pickup location</Title>}*/}
                            <Info>
                            <ZipCode>{zip}</ZipCode>
                            <Address>{address}</Address>
                            {/*<City>{city}</City>*/}
                            </Info>

                                <Title>Tel. Number</Title>
                            <Contact>

                                <Mobile>{phone}</Mobile>
                            </Contact>
                        </UserInfoContainer>
                    </UserProfileContainer>

                </BottomContainer>

                <CardContainer>
                     {/*{products.map((product) =>*/}
                     {/*    <Card product={product} key={product.id}/>*/}
                     {/*    )}*/}

                </CardContainer>
            </HomeContainer>
            <Footer />
        </Fragment>
    )
}


export default Profile;