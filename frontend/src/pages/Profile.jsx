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
import {cartAction} from "../store/actions/cartAction";
import authReducer from "../store/reducers/authReducer";
import {authAction} from "../store/actions/authAction";
import {LOGOUT_UNSET_TOKEN} from "../helpers/constants";

const Profile = ({author}) => {
    const productsAll = useSelector(state => state.productReducer.productsAll)
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
    const [products, setProducts] = useState('')

    useEffect(() => {
        const fetchUser = async () => {
            await dispatch(userAction('users/me/', 'GET', 'GET_USER'));
        }
        fetchUser()
        return function cleanup() {};
    }, [dispatch]);

    useEffect(() => {
        const userInfo = () => {
            if(user.location) setLocation(user.location);
            if(user.zip) setLocation(user.location);
            if(productsAll){
                // const filterProducts = (input) => {
                //     return input.filter((product) => product.author.first_name === user.first_name || product.author.last_name === user.last_name)
                // }
                //const newSet = filterProducts(productsAll)
                //setProducts(() => productsAll.filter((product) => product.author.first_name === user.first_name || product.author.last_name === user.last_name))
            }
        }
        userInfo()
    })

    const logout = () => {
       dispatch(authAction('', '', LOGOUT_UNSET_TOKEN))
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
                            {location && <Title>My Pickup location</Title>}
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
                     {products && products.map((product) => <Card product={product} key={product.id}/>)}
                </CardContainer>
            </HomeContainer>
            <Footer />
        </Fragment>
    )
}


export default Profile;