import React, {Fragment, useState} from 'react'
import {HeaderContainer, Icons, FormConatiner, Logo, LogoConatiner, OpenCart, AboutLogo} from '../../style/Header';
import {Link} from 'react-router-dom'
import SearchBar from '../SearchBar/index'
import LogoImg from '../../assets/logo_idea.jpg'
import ShoppingCart from "../ShoppingCart/index";

const Header = ({cart}) => {

    const [open, setOpen] = useState(false);

    const handleCLick = () => setOpen(!open)



    return (
        <Fragment>

            <HeaderContainer>

            <LogoConatiner>
                <Link to='/'><Logo src={LogoImg} /></Link>
            </LogoConatiner>

                <FormConatiner>
                    <SearchBar />
                </FormConatiner>
                <Icons >
                
                    <OpenCart>
                        {open && <ShoppingCart />}
                    </OpenCart>

                    <i className="fas fa-shopping-basket" onClick={handleCLick} />
                    <Link to='/'><i className="fas fa-user-circle" /></Link>
                    <Link to='/about'><AboutLogo src={LogoImg} /></Link>
                </Icons>

            </HeaderContainer>

        </Fragment>
    )
}

export  default Header;