import React, {Fragment} from 'react'
import {HeaderContainer, Icons, FormConatiner, Logo, LogoConatiner} from '../../style/Header';
import {Link} from 'react-router-dom'
import SearchBar from '../SearchBar/index'
import LogoImg from '../../assets/logo_idea.jpg'

const Header = () => {
    return (
        <Fragment>

            <HeaderContainer>

            <LogoConatiner>
                <Logo src={LogoImg} />
            </LogoConatiner>

                <FormConatiner>
                    <SearchBar />
                </FormConatiner>
                <Icons>
                    <Link><i className="fas fa-shopping-basket" /></Link>
                    <Link><i className="fas fa-user-circle" /></Link>
                    <Link><i className="fas fa-users" /></Link>
                </Icons>

            </HeaderContainer>

        </Fragment>
    )
}

export  default Header;