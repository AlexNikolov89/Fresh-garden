import styled from 'styled-components';
import {theme} from './index'

export const Form = styled.form `
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    opacity: 1;

`;

export const CategoryContainer = styled.div`
    display: flex;
    outline: none;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 33%;
    
    &:hover, :focus {
        background-color: ${theme.colorDefaultGrey};
    }
`;

export const LocationContainer = styled(CategoryContainer)``;

export const SearchContainer = styled(CategoryContainer)``;

export const SearchInput = styled.input`
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDefaultText};
    width: 100%;
    height: calc(100% - 2px);
    min-width: 50px;
    border: none;
    outline: none;
    

`;

export const CategoryInput = styled(SearchInput)``;

export const LocationInput = styled(SearchInput)``;

export const SearchButton = styled.button `
    height: calc(100% - 2px);
    width: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    background: ${theme.colorDefaultWhite};
    padding: ${theme.spaceS};
    
    &:hover, :focus {
        background-color: ${theme.colorDefaultGrey};
    }
    
    i.fas {
        color: ${theme.colorCaputMortuum};
        font-size: ${theme.fontSizeM};
    }
`;

export const CategoryButton = styled(SearchButton)``;

export const LocationButton = styled(SearchButton)``;

export const SubmitButton = styled(SearchButton)`
    background-color: ${theme.colorCaputMortuum};
    width: ${theme.controlHeightXL};
    
    i.fas {
        color: ${theme.colorDefaultGrey};
    }
    
    &:hover, :focus {
          background-color: ${theme.colorDefaultGrey};
          
          i.fas {
              color: ${theme.colorCaputMortuum}
          }
    }
    

`;
