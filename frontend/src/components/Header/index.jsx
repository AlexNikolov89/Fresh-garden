import React, {Fragment} from 'react'
import {
    HeaderContainer,
    Icons,
    NavLinkHome, NavLinkAbout, NavLinkProfile, FormContainer, LogoContainer, Logo, CartIcon
} from '../../style/Header';
import SearchBar from '../SearchBar'
import LogoImg from '../../assets/logo_idea.jpg'
import '../../style/Navbar.css'
import {cartAction} from "../../store/actions/cartAction";
import {TOGGLE_CART_VIEW} from "../../helpers/constants";
import {useDispatch} from "react-redux";

const Header = ({ sticky, element }) => {
    const dispatch = useDispatch();

    return (
        <Fragment>
            <HeaderContainer className={sticky ? "navbar navbar-sticky" : "navbar"} ref={element}>

                <LogoContainer>
                    <NavLinkHome to='/'><Logo src={LogoImg} /></NavLinkHome>
                </LogoContainer>

                <FormContainer>
                    <SearchBar />
                </FormContainer>

                <Icons >
                    <NavLinkAbout to='/about'><i className="fas fa-info-circle"></i></NavLinkAbout>
                    <NavLinkProfile to='/profile'><i className="fas fa-user-circle" /></NavLinkProfile>
                    <CartIcon onClick={() => dispatch(cartAction(TOGGLE_CART_VIEW))} to='/'><i className="fas fa-shopping-basket" /></CartIcon>
                </Icons>

            </HeaderContainer>
        </Fragment>
    )
}

export  default Header;