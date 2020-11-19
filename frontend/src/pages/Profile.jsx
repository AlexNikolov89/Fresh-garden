import React, {Fragment, useEffect, useState} from 'react';
import {HomeContainer, Box
} from '../style/Homepage';
import {TitleContainer, UserProfileContainer,
        AvatarContainer, Avatar, Name, City,
        ButtonEdit, BottomContainer, TitleGarden,
        TitleLocation, AddressInfo, TitleTel,
        TelContainer, UserInfoContainer, AboutGarden,
        AboutText, MainTitle, Info, Email, Contact,
        Mobile, LogOut, AsideContainer, LeftContainer,
        Image, Delivery, TitleWrap, ButtonWrap} from '../style/Profile'
import Header from '../components/Header'
import Footer from '../components/Footer/index'
import garden from '../assets/kopf-salad.jpg'
import defaultAvatar from '../assets/images/profile.png';
import Card from '../components/Card/index.js'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'
import {userAction} from "../store/actions/userAction";
import Banner from "../components/Header/Banner";
import {authAction} from "../store/actions/authAction";
import {LOGOUT_UNSET_TOKEN, SET_PRODUCTS_ALL} from "../helpers/constants";
import {productAction} from "../store/actions/productAction";
import {RightConatiner} from "../style/Checkoutpage";


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
    const [city, setCity] = useState('+ 41 79 543 ## ##')
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
            if(user.address) setAddress(user.address);
            if(user.city) setCity(user.city);
            if(user.description) setDescription(user.description);
            if(user.phone) setPhone(user.phone);
            if(productsAll) setProducts(productsAll);
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
                        <TitleWrap>
                         <MainTitle>Profile</MainTitle>
                            </TitleWrap>
                        <ButtonWrap>
                        <LogOut onClick={logout}>Logout</LogOut>
                            </ButtonWrap>
                     </TitleContainer>

                <BottomContainer>

                    <LeftContainer>

                    <UserProfileContainer>
                        <UserInfoContainer>

                            <AboutGarden>
                                <TitleGarden>Name</TitleGarden>
                                <AboutText>{user.first_name} {user.last_name}</AboutText>
                            </AboutGarden>

                            <Info>
                            <TitleLocation>Initial Consideration Message</TitleLocation>
                            <AddressInfo>{user.username}</AddressInfo>
                            </Info>


                            <Contact>
                                <TitleTel>Releases</TitleTel>
                                <TelContainer>{user.email}</TelContainer>
                            </Contact>

                            <Delivery>
                                <p>
                                    We keep you updated by not sending more than 3 emails a year.
                                </p>
                            </Delivery>

                        </UserInfoContainer>

                    </UserProfileContainer>

                    </LeftContainer>

                    <RightConatiner>
                        <AsideContainer>
                            <Image src={garden} />
                        </AsideContainer>
                    </RightConatiner>

                </BottomContainer>

                <Box style={{width: "100%", marginTop: 0, paddingTop: "32px"}}>
                     {products && products.map((product) => product.author.first_name === "Emma" && <Card product={product} sold={"true"}/>
                         // <Card product={product} key={product.id}/>
                     )}


                </Box>
            </HomeContainer>
            <Footer />
        </Fragment>
    )
}


export default Profile;