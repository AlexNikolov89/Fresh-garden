import styled from 'styled-components'
import {theme} from './index';

export const ShoppingCartConatiner = styled.div `
    width: 400px;
    height: 600px;
    display: flex;
    flex-direction: column;
    border: 1px solid green;
    background: ${theme.almond}
`;

export const ImageContainer = styled.div `
    display: flex;
    margin-top: 5px;
`;

export const Top = styled(ImageContainer) `
    justify-content: center;
`;

export const Text = styled.p `
    padding: 3px;
    color: grey;
    color: rgba(0, 0, 0, 0.2);
`;

export const Image = styled.img `
    margin: 20px;
    height: 100px;
`;

export const Name = styled.div `
   margin: 18px 20px;
    color: black;
    font-weight: Normal;
    font-size: 1.3rem;
    margin-bottom: 0px;
`;

export const Calc = styled(ImageContainer) `
    display: flex;

    i {
        height: 25px;
        width: 25px;
        color: ${theme.middleGreenYellow};
        display: flex;
        justify-content: center;
    }
`;

export const Quantity = styled.p `
     margin-top: 30px;
     font-weight: Bold;
`;

export const Price = styled.div `
    margin: 40px 20px;
    font-weight: ${theme.fontSizeBold};

`;

export const Button = styled.button `
    height: 25px;
    height: 25px;
    width: 25px;
    border: none;
    background: ${theme.almond};
    
`;

export const ButtonSubmit = styled.button `
    height: 40px;
    width: 200px;
    border-radius: 28px;
    margin-left: 25%;
    background: ${theme.middleGreenYellow};
    border: none;
    position: sticky;
    bottom: 0;
    margin-top: 25px;

    &:focus { 
        outline: none; 
        cursor: pointer;
        }

    &:active {
        background: ${theme.darkOliveGreen}
    }
`;

export const HorizontalLine = styled.hr `
    width: 300px;
    margin-left: 40px;
`;

export const Total = styled.h3 `
   
    display: flex;
    justify-content: flex-end;
    margin: 10px;
    padding-right: 60px;
`;

export const ProductInfo = styled.div `
    display: block;
`

