import styled from 'styled-components'

export const HeaderContainer = styled.div `
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: #B4CB67;
`;

export const FormConatiner = styled.div `
    width: 40%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-right: 150px;
`;

export const Icons = styled.div `
    display: flex-end;
   i {
       color: black;
       text-align: center;
       float: right;
       font-size: 1.6rem;
       padding: 30px;
   }

   i:hover{
       font-size: 1.8rem;
   }

   i:active {
        color: grey;
   }
`;

export const Logo = styled.img `
`;

export const LogoConatiner = styled.div `
   display: flex;

`;