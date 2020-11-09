import styled from 'styled-components';
import {theme} from '../style/index'

export const CheckoutConatiner = styled.div `
    height: 100%;
    width: 100%;
`;

export const ProductsConatiner = styled.div `
    background: ${theme.colorBackgroundColor};
`;

export const BoxContainer = styled.div `
  /* background: ${theme.colorBackgroundColor};
  padding: 50px; */
  display: flex;
  width: 100%;
  padding: 50px;
  
 `;


export const Description = styled.p `
    margin-top: 20px;
`;

export const Product = styled.h3 `

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
    display: block;
    border: 2px solid ${theme.colorDefaultGrey};
    margin: 0 30px;
    display: block;
    justify-content: center;
    border-radius: ${theme.borderRadiusL};
    height: 100%;
    box-shadow: ${theme.boxShadowDark}
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
    padding: 20px ;
    display: block;
    //font-size: ${theme.spaceS}
`;

export const Submit = styled.div `
    /* display: block;
    margin-left: 700px;
    padding: 60px; */
    margin: 10px 0;
    display: flex;
    justify-content: center;
    padding: 0 20px;
`;

export const ProductWrap = styled.div `
    width: 100%;
    height: 100%;
    border: 2px solid ${theme.colorDefaultGrey};
    border-radius: ${theme.borderRadiusL};
    //background-color: ${theme.colorAlmond};
    box-shadow: ${theme.boxShadowLight}
`;



