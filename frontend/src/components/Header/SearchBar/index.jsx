import React, {Fragment, useState} from 'react'
import {
    Form,
    LocationContainer,
    SearchContainer,
    SearchInput,
    LocationInput,
    SearchButton,
    LocationButton,
    SubmitButton, AutoCompleteContainer, AutoCompleteOne, AutocompleteOne, AutocompleteContainer,
} from '../../../style/SearchBar'
import {locationAction} from "../../../store/actions/locationAction";
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';

const SearchBar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [locationString, setLocationString] = useState('');
    const [searchString, setSearchString] = useState('');
    const [showAutocomplete, setShowAutocomplete] = useState(false);
    const [autocompleteOne, setAutocompleteOne] = useState('');

    const locationHandler = async e => {
        const inputValue = e.currentTarget.value
        setLocationString(inputValue)

        const response = await dispatch(locationAction(locationString))

        if (response === false || inputValue < 2) {
            setAutocompleteOne('')
            return setShowAutocomplete(false)
        } else setShowAutocomplete(true)

        console.log("in SearchBar, response _>", response)
        setAutocompleteOne(response.features[0].place_name_en)
    }

    const autocompleteHandler = (e, location) => {
        e.preventDefault();
        setLocationString(location)
        setShowAutocomplete(false)
    }

    const searchHandler = async e => {
        const inputValue = e.currentTarget.value
        setSearchString(inputValue)
    }

    return (
        <Fragment>
            <Form
                autocomplete={"off"}
                autocomplete={"false"}
                onSubmit={(e) => {
                    e.preventDefault();
                    // TODO implement search API
                    // history.push(`/?search=${locationString}${searchString}`);
                }}>
                <LocationContainer>
                    <LocationButton onClick={(e) => e.preventDefault() }>
                        <i className="fas fa-map-marker-alt"></i>
                    </LocationButton>
                    <LocationInput
                        name={'location'}
                        type={'search'}
                        // id={() =>
                        //     console.log(Math.floor(Math.random() * 9))
                        //     return {`location${Math.floor(Math.random() * 9)}`
                        // }}
                        placeholder={"Location"}
                        onChange={locationHandler}
                        value={locationString}
                        // autocomplete={"off"}
                        // autocomplete={"false"}
                        // autocomplete={"nope"}
                    />
                </LocationContainer>

                {showAutocomplete ? (
                    <AutocompleteContainer>
                        {{autocompleteOne} && <AutocompleteOne onClick={(e) => autocompleteHandler(e, autocompleteOne)}>{autocompleteOne}</AutocompleteOne>}
                    </AutocompleteContainer>
                ) : null }

                <SearchContainer>
                    <SearchButton onClick={(e) => e.preventDefault()}>
                        <i className="fas fa-keyboard"></i>
                    </SearchButton>
                    <SearchInput
                        name={"search"}
                        type={'search'}
                        placeholder={"Search"}
                        onChange={searchHandler}
                        value={searchString}
                    />
                </SearchContainer>
                <SubmitButton type='submit'>
                    <i className="fas fa-search"></i>
                </SubmitButton>
            </Form>
        </Fragment>
    )
}

export default SearchBar;
