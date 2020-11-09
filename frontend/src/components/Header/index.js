import React, {Fragment, useState} from 'react'
import {
    HeaderContainer,
    Icons,
    OpenCart,
    NavLinkHome, NavLinkAbout, NavLinkProfile, FormContainer, LogoContainer, Logo
} from '../../style/Header';
import SearchBar from '../SearchBar/index'
import LogoImg from '../../assets/logo_idea.jpg'
import ShoppingCart from "../ShoppingCart/index";

const Header = ({cart}) => {
    const [open, setOpen] = useState();
    const handleClick = () => setOpen(!open)

    return (
        <Fragment>
            <HeaderContainer>

                <LogoContainer>
                    <NavLinkHome to='/'><Logo src={LogoImg} /></NavLinkHome>
                </LogoContainer>

                <FormContainer>
                    <SearchBar />
                </FormContainer>

                <Icons >
                    <NavLinkAbout to='/about'><i className="fas fa-info-circle"></i></NavLinkAbout>
                    <NavLinkProfile to='/profile'><i className="fas fa-user-circle" /></NavLinkProfile>
                    <OpenCart>
                        {open && <ShoppingCart />}
                    </OpenCart>
                    <i className="fas fa-shopping-basket" onClick={handleClick} />
                </Icons>

            </HeaderContainer>
        </Fragment>
    )
}

export  default Header;