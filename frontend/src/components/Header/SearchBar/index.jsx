import React, {Fragment, useState} from 'react'
import {
    Form,
    LocationContainer,
    SearchContainer,
    SearchInput,
    LocationInput,
    SearchButton,
    LocationButton,
    SubmitButton,
    AutocompleteOne,
    AutocompleteContainer,
    AutocompleteTwo,
    AutocompleteThree,
} from '../../../style/SearchBar'
import {locationAction} from "../../../store/actions/locationAction";
import {useDispatch} from "react-redux";
import {productAction} from "../../../store/actions/productAction";
import {SET_PRODUCTS_ALL} from "../../../helpers/constants";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [locationString, setLocationString] = useState('');
    const [searchString, setSearchString] = useState('');
    const [showAutocomplete, setShowAutocomplete] = useState(false);
    const [autocompleteOne, setAutocompleteOne] = useState('');
    const [autocompleteTwo, setAutocompleteTwo] = useState('');
    const [autocompleteThree, setAutocompleteThree] = useState('');

    const locationHandler = async e => {
        const inputValue = e.currentTarget.value
        setLocationString(inputValue)

        const response = await dispatch(locationAction(locationString))

        if (response === false || inputValue < 2) {
            setAutocompleteOne('')
            setAutocompleteTwo('')
            setAutocompleteThree('')
            return setShowAutocomplete(false)
        } else setShowAutocomplete(true)

        console.log("in SearchBar, response _>", response)
        if (response.features[0]) setAutocompleteOne(response.features[0].place_name_en)
        if (response.features[1]) setAutocompleteTwo(response.features[1].place_name_en)
        if (response.features[2]) setAutocompleteThree(response.features[2].place_name_en)
    }

    const autocompleteHandler = (e, location) => {
        e.preventDefault();
        setLocationString(location)
        setShowAutocomplete(false)
    }

    const searchHandler = async e => {
        const inputValue = e.currentTarget.value
        setSearchString(inputValue)

        await dispatch(productAction('products/?search=' + locationString + inputValue, 'GET', SET_PRODUCTS_ALL));
    }

    const submitSearchHandler = async e => {
        e.preventDefault()
        const response = await dispatch(productAction('products/' + locationString + searchString, 'GET', SET_PRODUCTS_ALL));
        console.log("in da SearchBar, searchResponse", response)
    }

    return (
        <Fragment>
            <Form
                // autocomplete={"off"}
                // autocomplete={"false"}
                autocomplete={"nope"}
                onSubmit={submitSearchHandler}>
                <LocationContainer>
                    <LocationButton onClick={(e) => e.preventDefault()}>
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
                        {{autocompleteOne} &&
                        <AutocompleteOne
                            onClick={(e) => autocompleteHandler(e, autocompleteOne)}>
                            <i className="fas fa-map-marker"></i>
                            {autocompleteOne}
                        </AutocompleteOne>}
                        {{autocompleteTwo} &&
                        <AutocompleteTwo
                            onClick={(e) => autocompleteHandler(e, autocompleteTwo)}>
                            <i className="fas fa-map-marker"></i>
                            {autocompleteTwo}
                        </AutocompleteTwo>}
                        {{autocompleteThree} &&
                        <AutocompleteThree
                            onClick={(e) => autocompleteHandler(e, autocompleteThree)}>
                            <i className="fas fa-map-marker"></i>
                            {autocompleteThree}
                        </AutocompleteThree>}
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
