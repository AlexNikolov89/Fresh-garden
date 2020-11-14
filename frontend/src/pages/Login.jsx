import React, { useState } from 'react'
import {
    Container,
    LoginContainer,
    LoginHeader,
    LoginMainContainer,
    LoginQuestion,
    RightContainer
} from "../style/Login";
import {HeaderContainer} from "../style/Header";
import {SignUpButton} from "../style/Buttons";
import {SignIn} from "../components/SignIn";
import {SignUp} from "../components/SignUp";




export const Login = () => {
    const [toggleSwitch, setToggleSwitch] = useState(true);


    return (
        <LoginMainContainer>
            <Container>
                    <LoginHeader>
                        <LoginQuestion>{toggleSwitch ? <>Don't have an account?</> : <>Already have an account?</>}</LoginQuestion>
                        <SignUpButton onClick={() => setToggleSwitch(!toggleSwitch)}>{toggleSwitch ? <>Sign Up</> : <>Sign In</>}</SignUpButton>
                    </LoginHeader>
                <RightContainer>
                    <LoginContainer>
                        {toggleSwitch ? <SignIn /> : <SignUp />}
                    </LoginContainer>
                </RightContainer>
            </Container>
        </LoginMainContainer>
    )
}
