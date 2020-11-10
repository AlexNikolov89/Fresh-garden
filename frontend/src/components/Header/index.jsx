import React, {Fragment, useState} from 'react'
import {
    HeaderContainer,
    Icons,
    OpenCart,
    NavLinkHome, NavLinkAbout, NavLinkProfile, NavLinkAddproduct, FormContainer, LogoContainer, Logo, CartIcon
} from '../../style/Header';
import SearchBar from '../SearchBar'
import LogoImg from '../../assets/logo_idea.jpg'
import ShoppingCart from "../ShoppingCart/index";
import '../../style/Navbar.css'


const Header = ({ sticky, element }) => {
    const [open, setOpen] = useState();
    const handleClick = () => setOpen(!open)

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
                    <NavLinkAddproduct to='addproduct'><i class="fas fa-folder-plus" /></NavLinkAddproduct>
                    <NavLinkAbout to='/about'><i className="fas fa-info-circle"></i></NavLinkAbout>
                    <NavLinkProfile to='/profile'><i className="fas fa-user-circle" /></NavLinkProfile>
                    <OpenCart>
                        {open && <ShoppingCart />}
                    </OpenCart>
                    <CartIcon to='/'><i className="fas fa-shopping-basket" onClick={handleClick} /></CartIcon>
                </Icons>

            </HeaderContainer>
        </Fragment>
    )
}

export  default Header;