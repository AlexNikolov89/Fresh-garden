import React, {Fragment} from 'react'
import {
    HeaderContainer,
    Icons,
    NavLinkHome, NavLinkAbout, NavLinkProfile, FormContainer, LogoContainer, Logo, CartIcon, NavLinkAddproduct
} from '../../style/Header';
import SearchBar from '../SearchBar'
import LogoImg from '../../assets/images/logo_idea.jpg'
import '../../style/Navbar.css'
import {cartAction} from "../../store/actions/cartAction";
import {TOGGLE_CART_VIEW} from "../../helpers/constants";
import {useDispatch, useSelector} from "react-redux";

const Header = ({ sticky, element, minimal }) => {
    const viewCart = useSelector(state => state.cartReducer.viewCart)
    const dispatch = useDispatch();

    return (
        <Fragment>
            <HeaderContainer >

                <LogoContainer>
                    <NavLinkHome to='/'><Logo src={LogoImg} /></NavLinkHome>
                </LogoContainer>

                <FormContainer>
                    <SearchBar />
                </FormContainer>

                <Icons >
                    <NavLinkAddproduct to='addproduct'><i class="fas fa-folder-plus" /></NavLinkAddproduct>
                    <NavLinkAbout to='/about'><i className="fas fa-info-circle"></i></NavLinkAbout>
                    <NavLinkProfile to='/profile'><i className="fas fa-user-circle" /></NavLinkProfile>
                    <CartIcon
                        onClick={() => dispatch(cartAction(TOGGLE_CART_VIEW))}
                        className={viewCart ? "active" : "inactive"}>
                        <i className="fas fa-shopping-basket" />
                    </CartIcon>
                </Icons>

            </HeaderContainer>
        </Fragment>
    )
}

export  default Header;