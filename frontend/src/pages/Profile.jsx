import React, {Fragment, useEffect, useState} from 'react';
import {HomeContainer, Box
} from '../style/Homepage';
import {TitleContainer, UserProfileContainer, AvatarContainer, EmailContainer, Avatar, Name, ZipCode, Address, ButtonEdit,
    BottomContainer, TitleGarden, TitleLocation, AddressInfo, TitleTel, TelContainer, UserInfoContainer, AboutGarden, AboutText, MainTitle, Info, Email, Contact, Mobile, LogOut} from '../style/Profile'
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
import {userProfileReducer} from "../store/reducers/userProfileReducer";
import {authAction} from "../store/actions/authAction";
import {LOGOUT_UNSET_TOKEN, SET_PRODUCTS_ALL} from "../helpers/constants";
import {productAction} from "../store/actions/productAction";

const Profile = ({author}) => {
    const productsAll = useSelector(state => state.productReducer.productsAll)
    const user = useSelector(state => state.userProfileReducer.author)
    const dispatch = useDispatch();
    const history = useHistory();
    const [location, setLocation] = useState('')
    const [first_name, setFirstName] = useState('Jane');
    const [last_name, setLastName] = useState('Doe');
    const [email, setEmail] = useState('jane@gmail.com');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('+41 78 555 333 22');
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
            if(user.first_name) setFirstName(user.first_name);
            if(user.last_name) setLastName(user.last_name);
            if(user.email) setEmail(user.email);
            // if(productsAll) {
            //     const newProductSet = productsAll.filter((element) => element.author === user)
            //     console.log("in Profile newProductSet", newProductSet)
            //     return setProducts(newProductSet)
            // }
            if(productsAll) setProducts(productsAll)
        }
        userInfo()
        return function cleanup() {};
    })

    const logout = () => {
       dispatch(authAction('', '', LOGOUT_UNSET_TOKEN))
       history.push('/user/login')
    }

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
                            <Name>{`${first_name} ${last_name}`}</Name>

                            <ButtonEdit>Edit Profile</ButtonEdit>
                        </AvatarContainer>
                        <UserInfoContainer>


                            <AboutGarden>
                                <TitleGarden>About me and my garden</TitleGarden>
                                <AboutText>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br />
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore<br />
                                {description}
                                </AboutText>
                            </AboutGarden>

                            <Info>
                            {location && <TitleLocation>My Pickup location</TitleLocation>}
                            <AddressInfo>
                            <ZipCode>{zip}</ZipCode>
                            <Address>{address}</Address>
                            {/*<City>{city}</City>*/}
                            </AddressInfo>
                            </Info>


                            <Contact>
                                <TitleTel>Contact</TitleTel>
                                <TelContainer>
                                <Mobile>{phone}</Mobile>
                                     {email && <Email>{email}</Email>}
                                </TelContainer>

                            </Contact>

                            <EmailContainer>


                            </EmailContainer>

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

// const mapStateToProps = state => {
//     return {
//         author: state.userProfileReducer.author
//     };
// };



export default Profile;