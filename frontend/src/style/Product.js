import styled from 'styled-components'
import {theme} from './index';

export const ProductConatiner = styled.div `
    display: inline-block;
    width: 100%;
    border: 1px solid red;
`;

export const ProductImg = styled.img `
    height: 100px;
    
`;


export const Total = styled.h4 ``;

export const Description = styled.h3 ``; 

export const Info = styled.div `
`;

export const Name = styled.h2 `
`;
 

export const InfoConatiner = styled.div `
    display: flex;
    margin-left: 340px;
    background: red;
    //line-height: 1.8;
`;

export const Quantity = styled.div `
    display: flex;
    align-items: center;
    padding: 0px 120px;
`;

export const Button = styled.button `
    width: 40px;
    height: 40px;
    cursor: pointer;
    background: ${theme.colorMiddleGreenYellow};
    color: white;
    border: none;
    border-radius: 8px;
    padding: 5px;

    &:active {
        background: ${theme.colorDarkOliveGreen};
    }
`;

export const ProductQ = styled.h2 `
    //padding: 0 20px;
`;

export const TotalPrice = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 80px;

    i {
        font-size: 1.6rem;
    }
`;

export const Price = styled.h4 `
    /* padding: 0px 80px; */
`;



// export const Tomato = styled.img `
//     height: 150px;
// `;

// export const Description = styled.p `
//     margin-top: 20px;
// `;

// export const ProductTitle = styled.h3 ``;

// export const Info = styled.div `
//     display: block;
//     margin: 15px;
// `;

// export const Quantity = styled(Info) `
//     display: block;
//     margin: 10px;
//     padding: 0 300px;
// `;

// export const TotatlP = styled(Info)  `
    
// `;

// export const Button = styled.button `
//     width: 30px;
//     height: 30px;
//     display: block;
    
// `;

// export const TotalQ = styled.div `
//     display: flex;
//     margin-top: 20px;
// `

// export const ProductQ = styled.div `
//     padding: 0 15px;
// `;

// export const QueantityT = styled.h3 `

// `;

// export const Total = styled.h3 ``;

// export const Price = styled.h3 ``;

// export const Delete = styled.div ``;

