import styled from 'styled-components';
import {theme} from './index'

export const Form = styled.form `
    display: flex;
    margin-left: 40px;

    @media (max-width: 1000px) {
        display: none;

    }
`;

export const Container = styled.div `
    display: flex;
    outline: none;

    &:hover, :focus {
        border: 1px solid lightgrey;

    }
`

export const Input = styled.input `
    height: 30px;
    color: black;
    border: none;
`;

export const Button = styled.button `
    height: 30px;
    width: 30px;
    border: none;
    background: white;
`;