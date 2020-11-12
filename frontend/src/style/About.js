import styled from 'styled-components';
import {theme} from './index';
import background from '../assets/images/organic_table.png'

export const AboutContainer = styled.div `
    width: 100%;
    height: 100%;
`;

export const TopContainer = styled.div `
    /* background-image: url("${background}");
    background-repeat: no-repeat;
    background-size: cover; */
    background-color: ${theme.colorDarkOliveGreen};
    background: linear-gradient(to bottom, #003300 0%, #006600 63%);
`;

export const Image = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 300px;
`;

export const Slogan = styled.h2`
    color: ${theme.colorDefaultGrey};
    font-size: ${theme.fontSizeL};
    font-weight: ${theme.fontWeightBold};
    margin: ${theme.spaceDefault};
`;

export const ImageContainer = styled.div `
    width: 100%;
    height: 400px;
    display: flex;
    margin-top: -12rem;
    display: flex;
    justify-content: center;
`;

export const BackgroundImg = styled.img `
    width: 800px;
`;

export const BottomContainer = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Title = styled.h2 `
    font-size: ${theme.fontSizeL};
    color: ${theme.colorTitle};
    padding: 60px ;
`;

export const Text = styled.p `
    padding-bottom: 50px;
    font-size: ${theme.fontSizeDefault};
    
`;

export const HorizontalLine = styled.hr `
    border: 0;
    width: 50%;
    height: 1px;
    background: #333;
    background-image: linear-gradient(to right, #ccc, #333, #ccc);
    margin: 30px;
`;

export const ImagesContainer = styled.div `
    width: 100%;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    box-sizing: border-box;
`;

export const Image1 = styled.img `
    width: 30%;
    height: 300px;
`;

export const Image2 = styled.img `
    width: 40%;
    height: 300px;
`;

export const Image3 = styled.img `
    width: 30%;
    height: 300px;
`;