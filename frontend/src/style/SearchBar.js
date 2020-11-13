import styled from 'styled-components';
import {theme} from './index'

export const Form = styled.form `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    opacity: 1;
    
    @media (max-width: ${theme.mediaQueryScreenWidth}) {
        justify-content: flex-end;
        width: ${theme.controlHeightXL};
    }
`;

export const LocationContainer = styled.div`
    display: flex;
    outline: none;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 30%;
    
    @media (max-width: ${theme.mediaQueryScreenWidth}) {
        display: none;
    }
`;

export const SearchContainer = styled(LocationContainer)`
    width: 70%;
`;

export const SearchInput = styled.input`
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDefaultText};
    height: 100%;
    width: 100%;
    min-width: 50px;
    border: none;
    outline: none;
`;

export const LocationInput = styled(SearchInput)``;

export const SearchButton = styled.button `
    height: 100%;
    width: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    background: ${theme.colorDefaultWhite};
    padding: ${theme.spaceS};
    margin-right: ${theme.spaceXXS};
    border-left: 1px solid ${theme.colorMiddleGreenYellowVeryLight};
    
    &:hover, :focus {
        background-color: ${theme.colorMiddleGreenYellowVeryLight};
        box-shadow: ${theme.boxShadowInset};
    }
    
    i.fas {
        color: ${theme.colorDarkOliveGreen};
        font-size: ${theme.fontSizeM};
    }
`;

export const LocationButton = styled(SearchButton)``;

export const SubmitButton = styled(SearchButton)`
    height: 100%;
    width: ${theme.controlHeightXL};
    background-color: ${theme.colorMiddleGreenYellowVeryLight};
    margin-right: 0;
    justify-self: flex-start;
    
    i.fas {
        color: ${theme.colorDarkOliveGreen};
    }
    
    &:hover, :focus {
          background-color: ${theme.colorMiddleGreenYellowLight};
          box-shadow: ${theme.boxShadowInset};

          i.fas {
              color: ${theme.colorDarkOliveGreen}
          }
    }
`;
