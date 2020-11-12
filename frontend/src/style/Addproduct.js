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
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: ${theme.mediaQueryScreenWidth}){
        flex-direction: column;
    }
`;

export const AddCardForm = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    height: 100%;

    @media (max-width: ${theme.mediaQueryScreenWidth}) {
        width: 100%;
    }
`;

export const Title = styled.h1 `
    display: flex;
    justify-content: center;
    padding: 40px;
    color: ${theme.colorDefaultGrey};
    font-size: ${theme.fontSizeL};
    font-weight: normal;
`;

export const CardOverview = styled.aside `
    width: 30%;
    padding-top: 100px;

    @media (max-width: ${theme.mediaQueryScreenWidth}) {
     margin-top: -100px;
     //padding-bottom: 20px;
     padding: 80px 28%;
    }
`;

export const Form = styled.form `
    //border: 1px solid ${theme.colorDefaultGrey};
    height: 100%;
    width: 100%;
    //padding: ${theme.controlHeightL} 0;
    padding-bottom: 50px; 
    border-radius: 8px;
    border: ${theme.boxShadowLight};
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.colorBackgroundColor}
`;

export const Input = styled.input `
     width: 500px;
     height: ${theme.controlHeightL};
     padding: 10px;
     margin: 10px;
     border: none;
     border-bottom: 1px solid ${theme.colorDefaultGrey};
     font-size: ${theme.fontSizeS};
     color: ${theme.colorRandomText};
     background: ${theme.colorBackgroundColor};
     outline: none;
     padding: 0 30px;
`;

export const Unit = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 20px;
`;

export const DropDownHeader = styled.div `
    height: ${theme.controlHeightL};
    width: 100px;
    font-size: 15px;
    //border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colorDefaultGrey};
    color: ${theme.colorDefaultText}
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
        background: ${theme.colorDefaultGrey};
    }
`;

export const Label = styled.label `
    padding-right: 60px;
    //font-size: ${theme.fontSizeDefault};
    //color: ${theme.colorDefaultText};
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDefaultGrey};
    font-weight: bold;
    background: ${theme.colorBackgroundColor};
    
`;

export const Price = styled(Input) `
    width: 100px;
    border: 1px solid ${theme.colorDefaultGrey};
    height: ${theme.controlHeightDefault};
    color: ${theme.colorDefaultText}
`;

export const Delivery = styled.div `
    padding-top: ${theme.controlHeightL};
    display: flex;
    justify-content: center;
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDefaultGrey};
    font-weight: bold;
`;

export const ButtonContainer = styled.div `
    height: ${theme.controlHeightS};
    margin-top: 30px;

    @media (max-width: ${theme.mediaQueryScreenWidth}) {
        
    }
`;


export const Button = styled.button `
    width: 150px;
    height: ${theme.spaceXL};
    cursor: pointer;
    border-radius: ${theme.borderRadiusXL};
    margin: 0 30px;
    border: none;
    outline: none;
    font-size: ${theme.fontSizeDefault};
    background: ${theme.colorMiddleGreenYellowLight};
    color: ${theme.colorDefaultWhite}
`;


export const Slider = styled.input `
    width: 100%;
    -webkit-appearance: none;
    background: ${theme.colorMiddleGreenYellow};
    //background: linear-gradient(90deg, ${theme.colorDarkOliveGreen} 60%, rgba(214, 214, 214) 60%);
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    border-radius: ${theme.borderRadiusL};
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
    margin: 80px;
    width: 30%;
`;

export const Fruit = styled(Button) `
    background: ${theme.colorOrangeDefault};
`;

export const Vegetable = styled(Button) `
    background: ${theme.colorMiddleGreenYellow};
`;

export const CategoryLabel = styled(Label) `
    padding: ${theme.spaceDefault} 0px;
`;

export const CategoryContainer = styled.div `
    display: flex;
    justify-content: center;
`;

export const Upload = styled.div `
    display: flex;
    flex-direction: column;
    padding: ${theme.controlHeightL} 0;
`;

export const ButtonUpload = styled(Button) ``;

export const UploadLabel = styled(Label) `
    justify-content: center;
    padding: ${theme.spaceL};
`;

export const Description = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fontSizeS};
`;

export const DescriptionLabel = styled(Label) `
    padding: ${theme.spaceS};
`;

export const TextArea = styled.textarea `
    font-size: ${theme.fontSizeDefault};
    border: 1px solid ${theme.colorDefaultGrey};
    padding: ${theme.spaceS};
    outline: none;
    width: 200%;
`;

export const Submit = styled(Button) `
    margin-top: 70px;
    background-color: ${theme.colorDarkOliveGreen};
`;





