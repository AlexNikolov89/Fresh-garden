import styled from 'styled-components';
import background from '../assets/Veggies.jpg';
import {theme} from './index'
import { ProductContainer } from './Product';

export const AddProductContainer = styled.div `
    height: 100%;
    width: 100%;
`;

export const TopContainer = styled.div `
    background-image: url("${background}");
    background-repeat: no-repeat;
    background-size: cover; 
`;

export const Image = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 240px;
`;

export const Slogan = styled.h2`
    color: ${theme.colorDefaultWhite};
    font-size: ${theme.fontSizeXXL};
    font-weight: ${theme.fontWeightBold};
    margin: ${theme.spaceDefault};
`;

export const BottomConatiner = styled.div `
    display: block;
    background: ${theme.colorBackgroundColor};
`;

export const AddCardForm = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 80px;
    width: 70%;
    height: 100%;
`;

export const CardOverview = styled.aside `
    border: 1px solid green;
    width: 30%;
`;

export const Form = styled.form `
    border: 1px solid ${theme.colorDefaultGrey};
    height: 100%;
    padding: 20px 150px;
    border-radius: 8px;
    border: ${theme.boxShadowLight};
`;

export const Input = styled.input `
     width: 500px;
     height: 50px;
     padding: 10px;
     margin: 10px;
     border: none;
     border-bottom: 1px solid ${theme.colorDefaultGrey};
     font-size: ${theme.fontSizeDefault};
     color: ${theme.colorRandomText};
     background: ${theme.colorBackgroundColor};
     outline: none;
     padding: 0 30px;
`;

export const Unit = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
    padding: 0 150px
`

export const DropDownHeader = styled.div `
    height: 50px;
    width: 100px;
    font-size: 15px;
    border-radius: ${theme.borderRadiusL};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colorDefaultGrey};
`;

export const DropdownContainer = styled.div `
    width: 20%;
    height: 50px;
`;

export const DropdownList = styled.ul `
  background: ${theme.colorBackgroundColor};
  border: 1px solid ${theme.colorDefaultGrey};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fontSizeDefault};
  &:first-child {
    //padding-top: ${theme.spaceXS};
  }
`;

export const DropDownListContainer = styled.div `
    width: 100px;
    border: 1px solid ${theme.colorDefaultGrey};
`;

export const List = styled.li `
    list-style: none;
    height: 30px;
    font-size: 15px;
    border: 1px soli ${theme.colorDefaultGrey};
    width: 100%;
    display: flex;
    justify-content: center;
    &:hover {
        background: grey;
    }
`;

export const Label = styled.label `
    padding-right: 60px;
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDefaultText};
    background: ${theme.colorBackgroundColor};
    
`;

export const Price = styled(Input) `
    width: 100px;
    border: 1px solid ${theme.colorDefaultGrey};
    height: 40px;
`;

export const Delivery = styled.div `
    padding-top: 60px;
    display: flex;
    justify-content: center;
    font-size: ${theme.fontSizeDefault};
`;

export const ButtonContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 30px;
    margin-top: 30px;
`;

export const Button = styled.button `
    width: 150px;
    height: 50px;
    border-radius: 25px;
    margin: 0 30px;
    border: none;
    outline: none;
    font-size: ${theme.fontSizeDefault};
    background: ${theme.colorMiddleGreenYellowLight};
    color: ${theme.colorDefaultWhite}
`;


export const Slider = styled.input `
    width: 75%;
    -webkit-appearance: none;
    background: ${theme.colorMiddleGreenYellow};
    //background: linear-gradient(90deg, ${theme.colorDarkOliveGreen} 60%, rgba(214, 214, 214) 60%);
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    border-radius: 12px;
    box-shadow: ${theme.boxShadowLight};

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 50%;
        cursor: pointer;    
    }

    &:hover {
        opacity: 1; 
    }
`;

export const SliderConatiner = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    color: grey;
    margin: 80px;

`;

export const Fruit = styled(Button) `
    background: darkorange;
`;

export const Vegetable = styled(Button) `
    background: darkgreen;
`;

export const CategoryLabel = styled(Delivery) `
    padding: 20px 0px;
`;

export const CategoryContainer = styled.div `
    display: flex;
    justify-content: center;
`;





