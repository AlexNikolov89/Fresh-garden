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
                <LocationContainer>
                    <LocationButton>
                        <i className="fas fa-map-marker-alt"></i>
                    </LocationButton>
                    <LocationInput type='text' placeholder={"Location"} />
                </LocationContainer>

                <SearchContainer>
                    <SearchButton>
                        <i className="fas fa-keyboard"></i>
                    </SearchButton>
                    <SearchInput type='text' placeholder={"Search"}/>
                </SearchContainer>
                <SubmitButton type='submit'>
                    <i className="fas fa-search"></i>
                </SubmitButton>
            </Form>
        </Fragment>
    )
}

export default SearchBar;
