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
  border: 1px solid red;
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
    margin-left: 90px; 
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

