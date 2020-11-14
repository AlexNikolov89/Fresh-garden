import styled from 'styled-components'
import {theme} from "./index";

export const LoginMainContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
`

export const LoginHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: ${theme.fontSizeM};
    margin-top: 20px;
    margin-right: 30px;
`

export const LoginQuestion = styled.div`
  margin-right: 30px;
`

export const UserIconLogin = styled.div`
  margin-right: ${theme.spaceXS};
    margin-top: ${theme.spaceXS};
    i {
      font-size: ${theme.fontSizeDefault};
      color: ${theme.colorDefault};
    }
`;

export const PasswordIconLogin = styled.div`
  margin-right: ${theme.spaceXS};
    margin-top: ${theme.spaceXS};
    i {
      font-size: ${theme.fontSizeDefault};
      color: ${theme.colorDefault};
    }
`;

export const EmailIconSignUp = styled.div`
  margin-right: ${theme.spaceXS};
    margin-top: ${theme.spaceXS};
    i {
      font-size: ${theme.fontSizeDefault};
      color: ${theme.colorDefault};
    }
`;


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

`

export const RightContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    h2 {
        display: flex;
        justify-content: center;
        font-size: ${theme.fontSizeXXXL};
        line-height: 47px;
        margin-bottom: 45px;
        color: ${theme.colorTitle};
    }

    form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
        flex-direction: column;
    }
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StoreBtnContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 268px;
    margin: 10px;
`;


export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 60px - 26px);
    //padding-top: calc(128px - 20px); mark

    #signUpSuccess {
        color: rgba(0, 0, 0, 0.5);
    }

    p {
        height: 14px;
        font-size: 1.4rem;
    }

    input {
        border: none;
        padding: 0 0 0 0;
        opacity: 100%;
        line-height: 26px;
        font-size: 1.6rem;
        margin-top: 5px;

        &#user, &#password {
            width: 100%;
        }
    }

    input::-webkit-input-placeholder {
        color: black;
        opacity: 1;
    }

    input:focus {
        outline: none;
    }
    
    label {
        display: flex;
        align-self: center;
        justify-content: center;
    }
`;


export const StepOneContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 70px;
    height: 100%;

    #stepOneIcon {
        flex: 0;
        margin-top: min(100px, 60px);
        margin-bottom: calc(300px + 100px + 9px);
        min-height: 60px;
    }
`
export const StepLoginContainer = styled(StepOneContainer)`
    #submit {
        margin-top: min(150px, 60px);
        margin-bottom: calc(300px + 85px + 9px);
        min-height: 60px;
    }
`

export const StepTwoContainer = styled(StepOneContainer)`
    img {
        margin-top: calc(55px - 37px);
        margin-bottom: 41px;
        height: 81px;
        width: 81px;
    }

    p {
        color: rgba(0, 0, 0, .5);
        font-size: 1.6rem;
        text-align: center;
    }

    #stepTwoIcon {
        flex: 0;
        margin-top: min(10px, 60px);
        margin-bottom: calc(300px + 90px + 9px);
        min-height: 60px;
    }
`

export const StepThreeContainer = styled(StepOneContainer)`
    h2 {
        margin-bottom: 39px;
    }

    button {
        margin-bottom: 56px;
    }

    #stepThreeIcon {
        flex: 0;
        margin-top: min(10px, 60px);
        margin-bottom: calc(300px + 70px + 9px);
        min-height: 60px;
    }
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BaseInputContainer = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(0, 0, 0, .5);
    width: 260px;
    height: 58px;

    p {
        color: rgba(0, 0, 0, .5);
        font-size: 1.2rem;
        line-height: 12px;
    }

    label {
        margin-right: 20px;
    }

    input {
        width: 100%;
        height: 26px;
        background-color: ${theme.colorBackgroundColor};
    }

`

export const ValidationCodeContainer = styled(BaseInputContainer)`
    width: 560px;
`
export const EmailInputContainer = styled(BaseInputContainer)`
    flex-direction: column;
    align-items: flex-start;
`

export const EmailSignUpContainer = styled(BaseInputContainer)`
    align-items: flex-start;
    flex-direction: column;
    width: 340px;
    margin-top: 35px;
    
    i {
      margin-top: 10px;
    }

    div {
        width: 100%;
    }

    input {
        width: 100%;
        margin-left: 10px;
        margin-bottom: 20px;
        background-color: ${theme.colorBackgroundColor};
    }

    svg {
        margin-bottom: 15px;
    }

    div {
        display: flex;
        flex-direction: row;
    }
    
    p {
        padding-left: 26px; 
        height: 100%;
        font-size: 1.2rem;
        color: rgba(0, 0, 0, 0.5);
    }
`

export const UsernameInputContainer = styled(BaseInputContainer)`
    flex-direction: column;
    align-items: flex-start;
    background-color: ${theme.colorBackgroundColor};
`
export const FirstnameInputContainer = styled(BaseInputContainer)``
export const LastnameInputContainer = styled(BaseInputContainer)``
export const PasswordInputContainer = styled(BaseInputContainer)``
export const PasswordRepeatInputContainer = styled(BaseInputContainer)``

export const UsernameSignInInputContainer = styled(BaseInputContainer)`
    width: 340px;
`
export const PasswordSignInContainer = styled(UsernameSignInInputContainer)``

export const LayoutContainerForm = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`

export const LayoutContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`

export const LayoutContainerRight = styled(LayoutContainerLeft)``
