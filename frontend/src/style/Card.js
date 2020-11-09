import styled from 'styled-components';
import {theme} from './index'

export const CardContainer = styled.div `
    width: 270px;
    height: 410px;
    background: ${theme.colorAlmond};
    cursor: default;
    box-shadow: ${theme.boxShadowLightest};
    box-sizing: border-box;
    border-radius: ${theme.borderRadiusS};
    margin: ${theme.spaceXS};
    border-top: 8px solid ${theme.colorMiddleGreenYellowLight};
`;

export const TopContainer = styled.div `
    height: 250px;
    width: 100%;
`;

export const Image = styled.img `
    height: 100%;
    width: 100%;

    &:hover {
        opacity: 0.8;
    }
`;


export const BottomContainer = styled.div `

    i {
        display: flex;
        justify-content: flex-end;
        font-size: ${theme.fontSizeDefault};
    }

    i:hover {
        cursor: default;
    }
 
    i:active {
         color: ${theme.colorMiddleGreenYellowLight};
    }
`;

export const Info = styled.div `
    display: block;
    padding: 15px;
    color: ${theme.colorDarkOliveGreen}
`

export const Text = styled.p `
    font-size: ${theme.fontSizeDefault};
    font-weight: ${theme.fontWeightBold};
    color: ${theme.colorDarkOliveGreen};
    width: 60%;
`;

export const Wrapp = styled.div `
    display: flex;
`;

export const Price = styled.p `
    width: 50%;
    padding-top: 10px;
    font-size: ${theme.fontSizeS};
    
    span {
        font-weight: ${theme.fontWeightBold};
        opacity: 0.6;
    }
`;

export const KG = styled(Price)``;

export const Date = styled(Price)``;