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
   height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-evenly;
  background: ${theme.colorBackgroundColor};
 `;

export const Tomato = styled.img `
    height: 150px;
`;

export const Description = styled.p `
    margin-top: 20px;
`;

export const Product = styled.h3 ``;

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

// export const Button = styled.button `
//     width: 30px;
//     height: 30px;
//     display: block;
    
// `;

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

export const Total = styled.h3 ``;

export const Price = styled.h3 ``;

export const Button = styled.button `
     width: 30px;
     height: 30px;
     display: block;
 `;

