import styled from 'styled-components';
import {theme} from '../style/index'

export const CheckoutConatiner = styled.div `
    width: 100%;
`;

export const ProductsConatiner = styled.div `
    background: ${theme.colorBackgroundColor};
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    @media (max-width: 680px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }
`;

export const BoxContainer = styled.div `
  /* background: ${theme.colorBackgroundColor};
  padding: 50px; */
  display: flex;
  width: 100%;
  padding: 0 100px;
  padding-top: 40px;

  @media (max-width: ${theme.mediaQueryScreenWidth}){
        flex-direction: column;
        padding: 0 70px;
    }
 `;


export const Description = styled.p `
    margin-top: 20px;
`;

export const Product = styled.h3 `
    @media (max-width: ${theme.mediaQueryScreenWidth}){
        width: 100%;
    }
`;

export const Info = styled.div `
    display: block;
    margin: 15px;
`;

export const Quantity = styled(Info) `
    display: block;
    margin: 10px;
    padding: 0 300px;
`;

export const TotatlP = styled(Info)  ` `;

export const TopHeaderConatiner = styled.div `
    margin: 20px 0px;
    display: flex;
    justify-content: space-evenly;
    font-size: 1.2rem;
    color: grey;
    border: 1px solid ${theme.colorRandomText};
`;

export const Button = styled.button `
    height: 50px;
    width: 200px;
    background: ${theme.colorDarkOliveGreen};
    border: none;
    border-radius: 25px;
    color: white;
    outline: none;
    font-size: ${theme.fontSizeDefault};

    &:active {
        background: ${theme.colorMiddleGreenYellow}
    }
`;

export const Delivery = styled.h4 `
    color: ${theme.colorDefaultText};
    font-size: ${theme.fontSizeDefault};
    margin-bottom: 50px;

    span {
        margin-left: 25px;
    }
`;

export const PaymentConatiner = styled.aside `
    background: ${theme.colorBackgroundColor};
    border: 2px solid ${theme.colorDefaultGrey};
    margin: 0 30px;
    //border-radius: ${theme.borderRadiusL};
    box-shadow: ${theme.boxShadowDark};
    width: 40%;
    padding: 20px;
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    @media (max-width: ${theme.mediaQueryScreenWidth}){
        //flex-direction: row;
        width: 80%;
        margin-bottom: 60px;
    }

`;

export const Subtotal = styled.h4 `
    color: ${theme.colorDefaultText};
    font-size: ${theme.fontSizeDefault};

    span {
        color: ${theme.colorDefaultText};
        margin-left: 20px;
    }
`;

export const Summary = styled.h3 `
    color: grey;
    margin-bottom: 30px;
    font-size: ${theme.fontSizeM}
`;

export const Tax = styled.h4 `
    color: ${theme.colorDefaultText};
    font-size: ${theme.fontSizeDefault};

    span {
        margin-left: 60px;
    }
`;

export const TotalSum = styled.h3 `
    padding: 20px 0;
    font-size: ${theme.spaceDefault}
`;

export const SumConatiner = styled.div `
    /* display: block;
    justify-content: flex-start;
    margin-left: 180px; */
    width: 100%;
    padding: 10px ;
    display: block;
    //font-size: ${theme.spaceS}
`;

export const Submit = styled.div `
    display: block;
    //margin-left: 700px;
    //padding: 60px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    padding: 0 20px;
`;

export const ProductWrap = styled.div `
    width: 100%;
    //border: 2px solid ${theme.colorDefaultGrey};
    //border-radius: ${theme.borderRadiusL};
    //background-color: ${theme.colorAlmond};
    //box-shadow: ${theme.boxShadowLightest};
    @media (max-width: ${theme.mediaQueryScreenWidth}){
        width: 100%;
    }
`;



