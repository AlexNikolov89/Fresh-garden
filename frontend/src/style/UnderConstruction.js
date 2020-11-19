import styled from 'styled-components';
import {StandardButton} from "./Buttons";
import {theme} from "./index";


export const ConstructionContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: inherit;
`;

export const CenterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 75%;
`;

export const Icons = styled.div`
    display: flex;
    flex-direction: row;
        
    i {
        font-size: 3rem;
        color: ${theme.colorTwoDark};
        margin: 16px;
    }
`;

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;    
    
    i {
        font-size: ${theme.fontSizeDefault};
        color: ${theme.colorDarkGold};
        margin-bottom: 16px;
    }
`;

export const Message = styled.p`
    font-size: ${theme.fontSizeDefault};
    margin-bottom: 16px;
    text-align: center;
`;

export const GoBackButton = styled(StandardButton)`
`;


