import React, {Fragment, useEffect, useState} from 'react'
import {
    HeaderContainer,
    Icons,
    NavLinkHome,
    NavLinkAbout,
    NavLinkProfile,
    FormContainer,
    LogoContainer,
    Logo,
    CartIcon,
    NavLinkShop,
    NavLinkAddProduct
} from '../../style/Header';
import LogoImg from '../../assets/images/logo_idea.jpg'
import '../../style/Navbar.css'
import {cartAction} from "../../store/actions/cartAction";
import {RESET_NOT_LOGGED_IN, TOGGLE_CART_VIEW} from "../../helpers/constants";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
    const location = useLocation();
    const viewCart = useSelector(state => state.cartReducer.viewCart)
    const dispatch = useDispatch();
    const redirectFlagRedux = useSelector(state => state.cartReducer.redirectFlag)
    const [redirectFlagComponent, setRedirectFlagComponent] = useState(false)
    const [classLabel, setClassLabel] = useState('default')
    const tokenRedux = useSelector(state => state.authReducer.token)
    const [loginCheck, setLogicCheck] = useState(false)

    console.log("flag path  ",location.pathname)

    // lights up the profile navigation button if not logged in
    // TODO also do this for the "add product" page
    useEffect(() => {
        const redirectCheck = async () => {
            if (tokenRedux) {
                setLogicCheck(true)
            } else setLogicCheck(false)
            if (redirectFlagRedux && !redirectFlagComponent) {
                setClassLabel('impulse')
                return setRedirectFlagComponent(true)
            } else if (classLabel === 'impulse' && redirectFlagComponent) {
                setRedirectFlagComponent(false)
                const timer = setTimeout(() => setClassLabel('fade'), 100);
                dispatch(cartAction('', '', RESET_NOT_LOGGED_IN))
                return () => clearTimeout(timer);
            }
        }
        redirectCheck()
    },)


    return (
        <Fragment>
            <HeaderContainer >

                <LogoContainer>
                    <NavLinkHome to='/shop'><Logo src={LogoImg} /></NavLinkHome>
                </LogoContainer>

                <FormContainer>
                    {location.pathname === '/shop' && <SearchBar />}
                </FormContainer>

                <Icons >
                    {loginCheck &&
                    <NavLinkAddProduct
                        onClick={() => viewCart ? dispatch(cartAction('', '', TOGGLE_CART_VIEW)) : null}
                        to='/upload'>
                        <i className="fas fa-plus-circle"/>
                    </NavLinkAddProduct>}
                    <NavLinkShop
                        to='/shop'
                        isActive={() => ['/shop', '/', '/checkout', '/order'].includes(location.pathname)}>
                        <i className="fas fa-store"/>
                    </NavLinkShop>
                    <CartIcon
                        onClick={() => dispatch(cartAction('', '', TOGGLE_CART_VIEW))}
                        className={viewCart ? "active" : "inactive"}>
                        <i className="fas fa-shopping-basket" />
                    </CartIcon>
                    <NavLinkAbout
                        to='/about'
                        onClick={() => viewCart ? dispatch(cartAction('', '', TOGGLE_CART_VIEW)) : null}>
                        <i className="fas fa-question-circle"/>
                    </NavLinkAbout>
                    <NavLinkProfile
                        to='/user/profile'
                        onClick={() => viewCart ? dispatch(cartAction('', '', TOGGLE_CART_VIEW)) : null}
                        className={classLabel}
                        isActive={() => ['/user/profile', '/user/login', '/user'].includes(location.pathname)}>
                        <i className="fas fa-user"/>
                    </NavLinkProfile>
                </Icons>

            </HeaderContainer>
        </Fragment>
    )
}

export  default Header;