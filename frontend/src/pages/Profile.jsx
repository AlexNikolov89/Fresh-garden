import React, {Fragment, useEffect, useState} from 'react';
import {
    TopContainer, Image, HomeContainer, Slogan, Box
} from '../style/Homepage';
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
import {LOGOUT_UNSET_TOKEN, SET_PRODUCTS_ALL} from "../helpers/constants";
import {productAction} from "../store/actions/productAction";

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
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const fetchUser = async () => {
            await dispatch(userAction('users/me/', 'GET', 'GET_USER'));
        }
        fetchUser()
        return function cleanup() {};
    }, [dispatch]);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true)
            await dispatch(productAction('products/', 'GET', SET_PRODUCTS_ALL));
            setIsLoading(false);
        }
        fetchProducts()
        return function cleanup() {};
    }, [dispatch]);

    useEffect(() => {
        const userInfo = () => {
            if(user.location) setLocation(user.location);
            if(user.zip) setLocation(user.location);
            // if(productsAll) {
            //     const newProductSet = productsAll.filter((element) => element.author === user)
            //     console.log("in Profile newProductSet", newProductSet)
            //     return setProducts(newProductSet)
            // }
            if(productsAll) setProducts(productsAll)
        }
        userInfo()
        return function cleanup() {};
    },)

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

                <Box style={{width: "100%", marginTop: 0, paddingTop: "32px"}}>
                     {products && products.map((product) => <Card product={product} key={product.id}/>)}
                </Box>
            </HomeContainer>
            <Footer />
        </Fragment>
    )
}


export default Profile;