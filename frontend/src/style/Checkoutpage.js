import styled from 'styled-components';
import {theme} from '../style/index'

export const CheckoutConatiner = styled.div `
    height: 100%;
    width: 100%;
`;

export const ProductsConatiner = styled.div `
    background: ${theme.colorBackgroundColor};
    width: 100%;
    height: 100%;
`;

export const BoxContainer = styled.div `
  background: ${theme.colorBackgroundColor};
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

export const TotatlP = styled(Info)  `
    
`;

export const TopHeaderConatiner = styled.div `
    margin: 20px 0px;
    display: flex;
    justify-content: space-evenly;
    font-size: 1.4rem;
    color: grey;
`;

export const ProductT = styled.h4 `
    
`;

export const QuantityT = styled.h4 ``;

export const TotalQ = styled.div `
    display: flex;
    margin-top: 20px;
`

export const ProductQ = styled.div `
    padding: 0 15px;
`;

export const QueantityT = styled.h3 `

`;

export const TotalP = styled.div ``

export const Total = styled.h4 ``;

export const Price = styled.h3 ``;

export const Button = styled.button `
     width: 30px;
     height: 30px;
     display: block;
 `;

export const HorizontalLine = styled.hr `
    width: 80%;
    margin-left: 150px;
    border: 0;
    height: 1px;
    background: #333;
    background-image: linear-gradient(to right, #ccc, #333, #ccc);
`;

export const ButtonPay = styled.button `
    height: 50px;
    width: 200px;
    background: ${theme.colorDarkOliveGreen};
    border: none;
    border-radius: 25px;
    color: white;
    outline: none;

    &:active {
        background: ${theme.colorMiddleGreenYellow}
    }
`;

export const Delivery = styled.h4 `
    color: grey;

    span {
        color: ${theme.colorTitle}
    }
`;

export const PaymentConatiner = styled.div `
    background: ${theme.colorBackgroundColor};
    display: flex;
    padding: 40px;
`;

export const Subtotal = styled.h4 `
    color: grey;

    span {
        color: ${theme.colorTitle}
    }
`;

export const Summary = styled.h3 `
    color: grey;
    margin-bottom: 30px;
`;

export const Tax = styled.h4 `
    color: grey;

    span {
        color: ${theme.colorTitle}
    }
`;

export const TotalSum = styled.h3 `

`;

export const SumConatiner = styled.div `
    display: block;
    justify-content: flex-start;
    margin-left: 180px;
`;

export const Submit = styled.div `
    display: block;
    margin-left: 700px;
    padding: 60px;
`

