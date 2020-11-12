import React, { useState } from 'react'
import {Container, LoginContainer, LoginMainContainer, RightContainer} from "../style/Login";
import {HeaderContainer} from "../style/Header";
import {GenericButton} from "../style/Buttons";
import {SignIn} from "../components/SignIn";
import {SignUp} from "../components/SignUp";




export const Login = () => {
    const [toggleSwitch, setToggleSwitch] = useState(true);


    return (
        <LoginMainContainer >
            <Container>
                <HeaderContainer>
                    <header>
                        {toggleSwitch ? <>Don't have an account?</> : <>Already have an account?</>}
                        <GenericButton onClick={() => setToggleSwitch(!toggleSwitch)}>{toggleSwitch ? <>Sign Up</> : <>Sign In</>}</GenericButton>
                    </header>
                </HeaderContainer>
                <RightContainer>
                    <LoginContainer>
                        {toggleSwitch ? <SignIn /> : <SignUp />}
                    </LoginContainer>
                </RightContainer>
            </Container>
        </LoginMainContainer>
    )
}
