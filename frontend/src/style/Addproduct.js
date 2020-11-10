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
    border-radius: 8px;
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



// export const PaymentConatiner = styled.aside `
//     background: ${theme.colorBackgroundColor};
//     border: 2px solid ${theme.colorDefaultGrey};
//     margin: 0 30px;
//     //border-radius: ${theme.borderRadiusL};
//     box-shadow: ${theme.boxShadowDark};
//     width: 40%;
//     padding: 20px;
//     height: 400px;
//     display: flex;
//     flex-wrap: wrap;
//     flex-direction: column;

// `;

// export const AddProductForm = styled.div `
//     background: #fff;
//     max-width: 1300px;
// 	width: 80%;
// 	height: 450px;
//     display: flex;
//     margin-top: -15rem;
//     border-radius: 4px;
// 	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2),
//                 0px 10px 20px rgba(0, 0, 0, 0.15);
// `;

// export const Product = styled.div `
//     width: 30%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `;

// export const ProductDetails = styled.div `
//     width: 100%;
//     display: flex;
// `;

// export const FormRight = styled.form `
//      display: flex;
//     flex-direction: column;
//     padding-top: 20px;
//     //justify-content: center;
//     align-items: center;
//     border: 1px solid red;
//     width: 50%;
// `;

// export const FormLeft = styled(FormRight) ``;

// export const Button = styled.button `
//     width: 200px;
//     height: 40px;
//     border-radius: 25px;
//     margin-top: 20px;
//     border: none;
//     outline: none;
// `;

// export const Image = styled.img `
//     width: 200px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 8px;
// `;

// export const Upload = styled(Button) `
    
// `;

// export const Top = styled.div `
//     height: 50%;
//     border-bottom: 1px solid ${theme.colorDefaultGrey};
//     padding: 20px;
// `;

// export const Bottom = styled.div `
//     height: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     padding: 10px;
// `;

// export const Description = styled.textarea `
//     border: 1px solid ${theme.colorDefaultGrey};
//     outline: none;
//     width: 100%;
//     width: 100%;
//     padding: 12px;
//     border-radius: 4px;
//     resize: vertical;
//     font-size: ${theme.fontSizeDefault};
//     color: ${theme.colorDefaultGrey}
// `;

// export const Input = styled.input `
//     width: 300px;
//     height: 50px;
//     padding: 10px;
//     margin: 10px;
//     border: none;
//     border-bottom: 1px solid ${theme.colorDefaultGrey};
//     font-size: ${theme.fontSizeDefault};
//     color: ${theme.colorRandomText}
// `;

// export const Section = styled.div ``;

// export const Label = styled.label `
//     font-size: ${theme.fontSizeDefault};
//     margin-right: 30px;
// `;

// export const PricePer = styled(Input) `
//     width: 80px;
//     height: 50px;
// `;

// export const Select = styled.div `
//     display: flex;
//     flex-direction: row;
//     padding: 20px;
// `;

// export const Choose = styled.label `
//     font-size: ${theme.fontSizeDefault};
//     padding: 10px 0;
// `

// export const Option = styled.button `
//     font-size: ${theme.fontSizeDefault};
//     color: ${theme.colorDefaultGrey};
//     height: 40px;
//     width: 100px;
//     margin: 0px 20px;
//     border: none;
//     outline: none;
//     border-radius: 8px;
// `;

// export const ChooseCategory = styled(Label) `
//     padding: 20px 0;
// `;

// export const Category = styled.div `
//     display: flex;
//     flex-direction: row;
// `;

// export const Vegetable = styled(Option) `
//     background: green;
// `;

// export const Fruit = styled(Option) `
//     background: darkorange;
// `;

/* export const FilterCategory = styled.div ``;

export const Category = styled.button ``;

export const Category = styled.button ``; */





