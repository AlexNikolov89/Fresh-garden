import React, {Fragment, useState} from 'react'
import {HeaderContainer, Icons, FormConatiner, Logo, LogoConatiner, OpenCart} from '../../style/Header';
import {Link, withRouter } from 'react-router-dom'
import SearchBar from '../SearchBar/index'
import LogoImg from '../../assets/logo_idea.jpg'
import ShoppingCart from "../ShoppingCart/index";

const Header = () => {

    const [open, setOpen] = useState(false);

    const handleCLick = () => setOpen(!open)

    return (
        <Fragment>

            <HeaderContainer>

            <LogoConatiner>
                <Logo src={LogoImg} />
            </LogoConatiner>

                <FormConatiner>
                    <SearchBar />
                </FormConatiner>
                <Icons >
                
                    <OpenCart>
                        {open && <ShoppingCart />}
                    </OpenCart>

                    <i className="fas fa-shopping-basket" onClick={handleCLick} />
                    <Link><i className="fas fa-user-circle" /></Link>
                    <Link><i className="fas fa-users" /></Link>
                </Icons>

            </HeaderContainer>

        </Fragment>
    )
}

export  default Header;