import React, {Fragment} from 'react'
import {
    Form,
    CategoryContainer,
    LocationContainer,
    SearchContainer,
    SearchInput,
    CategoryInput,
    LocationInput,
    SearchButton,
    CategoryButton,
    LocationButton,
    SubmitButton, SubmitContainer
} from '../../style/SearchBar'

const SearchBar = () => {
    return (
        <Fragment>
            <Form>
                <CategoryContainer>
                    <CategoryButton>
                        <i class="fas fa-sort"></i>
                    </CategoryButton>
                    <CategoryInput type='text' />
                </CategoryContainer>

                <LocationContainer>
                    <LocationButton>
                        <i class="fas fa-map-marker-alt"></i>
                    </LocationButton>
                    <LocationInput type='text' />
                </LocationContainer>

                <SearchContainer>
                    <SearchButton>
                        <i className="fas fa-keyboard"></i>
                    </SearchButton>
                    <SearchInput type='text' />
                    <SubmitButton type='submit'>
                        <i className="fas fa-search"></i>
                    </SubmitButton>
                </SearchContainer>
            </Form>
        </Fragment>
    )
}

export default SearchBar;
