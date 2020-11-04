import styled from 'styled-components';

export const CardContainer = styled.div `
    width: 270px;
    height: 410px;
    background: #edded4;
    cursor: pointer;
    box-shadow: 10px 10px 5px #aaaaaa;
    box-sizing: border-box;
    margin-top: 50px;
`;

export const TopContainer = styled.div `
    height: 250px;
    width: 270px;
`;

export const Image = styled.img `
    height: 100%;
    width: 100%;
`;

export const BottomConatiner = styled.div `

    i {
        float: right;
        font-size: 1.4rem;
        color: #5D6D37;
        text-align: center;
        margin-right: 40px;
        cursor: pointer;
    }

    i:hover {
        font-size: 1.6rem;
    }

 
    i:active {
         color: grey;
    }
`;

export const Info = styled.div `
    display: block;
    padding: 8px;
`

export const Text = styled.p `
    font-size: 1.2rem;
    font-weight: bold;
    color: #5D6D37;
    width: 50%;

    &:hover {
        font-size: 1.3rem;
    }
`;

export const Price = styled.p `
    width: 50%;
   color: #5D6D37;
    
    span {
        font-weight: bold;
        color: #5D6D37;
    }
`;