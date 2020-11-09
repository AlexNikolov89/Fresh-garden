import styled from 'styled-components';

export const Form = styled.form `
    height: 40px;
    padding: 10px;
    border-radius: 40px;
    width: 10%;
    display: flex;
`;

export const Input = styled.input `
    border: none;
    outline: none;
    float: left;
    color: #EDDED4;
    font-size: 1.4rem;
    line-height: 40px;
    width: 0px;
    transition: all 0.8s;
    border-radius: 40px;
    background-color: #5D6D37;

    &:hover, &:active {
        width: 800px;
        padding: 0 6px;
        border: 1px solid #EDDED4;
    }

    &:focus {
        width: 800px;
        padding: 0 6px;
    }
`;

export const Button = styled.button `
    border: none;
    background: none;
    outline: none;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #5D6D37;

    i {
        z-index: 1;
        background: #5D6D37;
        font-size: 1.6rem;
        color: black;
        border-radius: 50px;
        cursor: pointer;
    }
`;